import config from "../config.json";

const env = process.env.REACT_APP_ENV || "development";

export const withConfiguration = cb => (cb !== undefined ? cb(config[env]) : config[env]);
