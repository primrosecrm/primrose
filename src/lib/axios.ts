import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5140/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;