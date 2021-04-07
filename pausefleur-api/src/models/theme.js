import { sql } from "../services/database";

export const getFonts = async () => {
  const fonts = await sql`SELECT name FROM font`.execute();
  return fonts.map(({ name }) => name);
};
