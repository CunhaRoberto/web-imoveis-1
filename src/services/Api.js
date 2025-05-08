import axios from "axios";

export const urlApi = 'http://localhost:8000'

const Api = axios.create({
    baseURL: 'http/:8000',
    baseURE: '',
        // headers:{
        //     'Content-Type': 'application/json'
        // }
});

export default Api;