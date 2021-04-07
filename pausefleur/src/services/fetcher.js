import fetch from "isomorphic-unfetch";
import { withConfiguration } from "./config";

const buildQueryString = params =>
  `?${Object.keys(params)
    .filter(k => !!params[k])
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    .join("&")}`;

export const fetcher = (root, verb) => (url, payload, params) => {
  return withConfiguration(async config => {
    const target = `${config[root]}${url}${params ? buildQueryString(params) : ""}`;
    const result = await fetch(target, {
      method: verb,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: payload !== undefined ? JSON.stringify({ ...payload }) : undefined
    });
    return result.json();
  });
};

export const get = fetcher("server", "GET");
export const post = fetcher("server", "POST");
export const put = fetcher("server", "PUT");
