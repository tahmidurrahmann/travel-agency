import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {

    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    axios.interceptors.response.use(function (response) {
        return response
    }, function (error) {
        console.log(error);
        return Promise.reject(error);
    })
    
    return axiosSecure;
};

export default useAxiosSecure;