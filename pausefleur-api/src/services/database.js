import db from "mysql";
import config from "config";
import util from "util";

export { default as sql } from "./sql.js";

const databases = config.get("databases");

const createPool = conf => {
  return db.createPool({
    ...conf,
    typeCast: (field, next) => {
      if (field.type === "JSON") {
        try {
          return JSON.parse(field.string());
        } catch (e) {}
      }
      return next();
    }
  });
};

const pools = Object.entries(databases).reduce((acc, [k, v]) => {
  const pool = createPool(v);
  pool.query = util.promisify(pool.query);
  pool.getConnection = util.promisify(pool.getConnection);
  return { ...acc, [k]: pool };
}, {});

const getPool = (database = "default") => {
  if (pools[database] === undefined) {
    const errorMessage = `Unknown database "${database}" specified`;
    throw new Error(errorMessage);
  }
  return pools[database];
};

export const getConnection = async database => {
  const pool = getPool(database);
  const connection = await pool.getConnection();
  connection.query = util.promisify(connection.query);
  connection.beginTransaction = util.promisify(connection.beginTransaction);
  connection.commit = util.promisify(connection.commit);
  connection.rollback = util.promisify(connection.rollback);
  return connection;
};

export const executeQuery = (database, defaultValue, transformation) => {
  const pool = getPool(database);
  return async query => {
    try {
      const result = await pool.query(query);
      return transformation !== undefined ? transformation(result, defaultValue) : result;
    } catch (err) {
      return defaultValue;
    }
  };
};

const toSingle = (result, defaultValue) => {
  const isFunction = typeof defaultValue === "function";
  return result.length === 0
    ? isFunction
      ? defaultValue()
      : defaultValue
    : isFunction
    ? defaultValue(result[0])
    : result[0];
};

const insertId = result => {
  return result !== undefined ? result.insertId : undefined;
};

export const execute = database => {
  return executeQuery(database, []);
};

export const executeSingle = (database, defaultValue) => {
  return executeQuery(database, defaultValue, toSingle);
};

export const insert = database => {
  return executeQuery(database, undefined, insertId);
};
