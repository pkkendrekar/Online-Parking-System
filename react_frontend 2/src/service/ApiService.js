import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api";

class ApiService {
  
  addUser(user) {
    return axios.post("" + USER_API_BASE_URL + "/signup", user);
  }

  loginUser(loginRequest) {
    return axios.post("" + USER_API_BASE_URL + "/login", loginRequest);
  }

 
}

export default new ApiService();
