import axios from 'axios'

const axiosInitialiser = ()=>{
axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('quizToken');

}

export default axiosInitialiser;

