import axios from 'axios'
const idDev = process.env.NODE_ENV === 'development'
// console.log(idDev)
const instance = axios.create({
  baseURL: idDev ? '/wzq' : 'http://m.d1.cn',
  timeout: 3000,
  headers: {

  }
})
export default instance
