const env = process.env.NODE_ENV

const baseConfig = {
  url: process.env.REACT_APP_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  baseUrlApi: process.env.REACT_API_BASE_URL,
  hash: process.env.REACT_APP_HASH,
  ts: process.env.REACT_APP_TS
}

const defaultUrlImage = {
  default: 'https://image.tmdb.org/t/p/w300'
}

export { baseConfig, env, defaultUrlImage }
