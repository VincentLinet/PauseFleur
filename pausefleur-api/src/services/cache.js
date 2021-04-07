const CACHE = {};

export const getKeys = () => Object.keys(CACHE);
export const getCache = key => CACHE[key];
export const clearCache = () => Object.keys(CACHE).forEach(key => delete CACHE[key]);

export const setCache = (key, item) => {
  if (!CACHE[key]) CACHE[key] = {};
  CACHE[key] = item;
  return CACHE[key];
};
