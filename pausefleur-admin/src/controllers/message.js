import { post } from "../services/fetcher";
import { get } from "../../../encourage-ton-thesard/src/services/fetcher";

export const postMessage = ({ ...payload }) => post("api/message", payload);

export const getPendingMessages = () => get("api/message/pending");

export const addMessages = ({ ...payload }) => post("api/message/multiple", payload);

export const deleteMessages = ({ ...payload }) => post("api/message/delete", payload);
