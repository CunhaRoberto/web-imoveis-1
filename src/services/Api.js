import axios from "axios";

const Api = axios.create({
    //baseURE: 'http/:8000',
    baseURE: '',
    headers:{
        'Content-Type': 'application/json'
    }
});

export default Api;