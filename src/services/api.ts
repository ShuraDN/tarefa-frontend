import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-backend-f159221.herokuapp.com'
})
 
export default api;