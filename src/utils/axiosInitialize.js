import axios from 'axios'

const axiosInitialiser = ()=>{
axios.defaults.baseURL = 'http://localhost:3002/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('quizToken');

}



export default axiosInitialiser;

