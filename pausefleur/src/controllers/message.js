import { post } from "../services/fetcher";

export const postMessage = ({ ...payload }) => post("api/message", payload);
