import { get } from "../services/fetcher";

export const getDailyTheme = () => get("api/theme/daily");

export const refreshTheme = () => get("api/theme/refresh");
