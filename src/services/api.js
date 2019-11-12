import axios from 'axios'

const api = axios.create({
  baseURL: 'URHostApi',
})

export default api