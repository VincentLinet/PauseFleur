import { execute, executeSingle, insert } from "./database.js";

class SQL {
  constructor(literals, values = []) {
    this.literals = Array.isArray(literals) ? [...literals] : [literals];
    this.values = values;
  }
  get sql() {
    return this.literals.join("?");
  }
  append(partial) {
    const lastIndex = this.literals.length - 1;
    const isPartialSQL = partial instanceof SQL;
    if (isPartialSQL) {
      const [head, ...tail] = partial.literals;
      this.literals[lastIndex] += ` ${head}`;
      this.literals = [...this.literals, ...tail];
      this.values = [...this.values, ...partial.values];
    } else {
      this.literals[lastIndex] += ` ${partial}`;
    }
    return this;
  }
  appendIf(cond, partial) {
    if (cond) {
      this.append(partial);
    }
    return this;
  }
  database(db) {
    this.db = db;
    return this;
  }
  execute() {
    return execute(this.db)(this);
  }
  single(defaultValue) {
    return executeSingle(this.db, defaultValue)(this);
  }
  insert() {
    return insert(this.db)(this);
  }
}

Object.defineProperty(SQL.prototype, "sql", { enumerable: true });

export default (literals, ...values) => new SQL(literals, values);
