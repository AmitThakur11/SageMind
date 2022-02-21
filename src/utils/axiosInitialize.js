import axios from 'axios'

const axiosInitialiser = ()=>{
axios.defaults.baseURL = 'https://sagemindbase.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('quizToken');

}

export default axiosInitialiser;

