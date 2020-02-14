/**
 * Базовый конфиг для запросов
 * @type {{url: string}} - url для запросов
 */
export const BASE_HTTP_CONFIG = {
  baseURL: "https://api.github.com"
}

/**
 * Роуты для запросов
 * @type {{repos: string, users: string}}
 */
export const API_PARTS = {
  users: "/users",
  repos: "/repos",
  readme: "/readme"
}
