import axios from 'axios';
import router from '../router'
console.log(router)
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use(function (res) {
    if (res.data.code !== 0) { // 说明保存了
        return Promise.reject(res.data.data);
    }
    return res.data;
}, res => {
    if (res.response.status === 401) { // 没权限
        debugger
        router.push('/login');
    }
    return Promise.reject('Not Allowed');
});
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})
export default axios;