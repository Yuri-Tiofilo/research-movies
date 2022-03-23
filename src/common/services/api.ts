import axios from 'axios'
import { baseConfig } from 'common/constants'

const api = axios.create({
  baseURL: `${baseConfig.url}`,
  responseType: 'json'
})

export default api
