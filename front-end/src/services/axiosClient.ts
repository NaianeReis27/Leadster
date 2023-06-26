import axios from 'axios'

const api = axios.create({
  baseURL: 'https://back-end-naianereis.vercel.app',
  timeout: 5000,
})

export default api
