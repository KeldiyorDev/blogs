import axios from "axios";

const defaultOptions = {
    baseURL: "http://localhost:8000/api/",
    headers: {
        'Content-Type': 'application/json',
    },
};

let API = axios.create(defaultOptions);

export default API;

