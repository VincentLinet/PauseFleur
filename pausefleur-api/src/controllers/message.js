import { addMessage as mAddMessage, getIncome as mGetIncome } from "../models/message";

export const addMessage = ({ body }, res, next) => {
  mAddMessage(body);
  res.send({ status: "Enregistré !" });
};

export const getIncome = async (req, res, next) => {
  const messages = await mGetIncome();
  res.send(messages);
};
