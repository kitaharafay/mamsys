import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ?
    '/WebApp/Controlls' : 'http://localhost:62681/WebApp/Controlls',
})

export default service
