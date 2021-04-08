import cron from "node-cron";

import { getCache, setCache } from "../services/cache";
import { getPicture } from "../services/picture";
import { getMessages } from "../models/message";
import fonts from "../theme/fonts";

export const getDaily = async (req, res, next) => {
  // const theme = getCache("theme");
  const theme = await generateTheme();
  res.send({ ...theme });
};

export const getNew = async (req, res, next) => {
  const theme = await generateTheme();
  res.send({ ...theme });
};

const generateTheme = async () => {
  const messages = await getMessages();
  const message = messages[Math.floor(Math.random() * messages.length)];
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  const location = Math.floor(Math.random() * 9);
  const picture = await getPicture();
  return { ...picture, location, message, font };
};

const cacheTheme = async () => {
  const theme = await generateTheme();
  setCache("theme", theme);
};

export const resetTheme = async () => {
  cron.schedule("0 0 * * *", await cacheTheme());
};
