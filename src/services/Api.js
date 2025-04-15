import axios from "axios";

const Api = axios.create({
    baseURL: 'http/:8000',
    baseURE: '',
    headers:{
        'Content-Type': 'application/json'
    }
});

export default Api;