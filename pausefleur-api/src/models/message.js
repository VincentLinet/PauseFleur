import { sql } from "../services/database";

export const addMessage = ({ message, name }) =>
  sql`INSERT INTO income (text, name) VALUES (${message}, ${name})`.execute();

export const getMessages = async () => {
  const messages = await sql`SELECT text FROM message`.execute();
  return messages.map(({ text }) => text);
};

export const getIncome = async () => {
  const messages = await sql`SELECT * FROM income`.execute();
  return messages;
};
