import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:7001'
})

export default service
