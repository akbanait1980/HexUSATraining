import axios from "axios";

export default axios.create({
    baseURL : 'http://apolis-grocery.herokuapp.com/api'
})