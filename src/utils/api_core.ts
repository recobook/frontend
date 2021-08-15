import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.0.21:8000", 
    headers: {'Content-Type': 'application/json'},
})