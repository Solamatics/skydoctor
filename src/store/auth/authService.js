import axios from "axios"


const baseURL = "https://api.gettheskydoctors.com/api/v1"


const register = async (userData) => {
     const response  = await axios.post(`${baseURL}/register`, userData);

     if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log("New User", response.data)
     }

     return response.data;
}


//login user
const login = async (userData) => {
  const response = await axios.post(`${baseURL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};


const authService = {register, login}


export default authService;