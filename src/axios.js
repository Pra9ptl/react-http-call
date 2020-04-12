import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.post['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

//you can also add interceptors in ur instances

export default instance;