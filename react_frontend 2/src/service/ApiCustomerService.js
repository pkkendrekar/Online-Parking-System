import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api";

class ApiCustomerService {
  //Edit Profile
  //return user object
  editUser(user) {
    return axios.put(USER_API_BASE_URL + "/edit_profile/", user);
  }

  //Change password
  //retrun successfully msg
  editUserPassword(user) {
    return axios.put(USER_API_BASE_URL + "/edit_password", user);
  }

  fetchHistoryList(U_ID,book) {
    return axios.get(USER_API_BASE_URL + "/view_bookingHistoryByCusId/" + U_ID,book);
  }

  addbook(book) {
    return axios.post(USER_API_BASE_URL + "/bookParking", book);
  }

  fetchParkingByCity(searchParking) {
    return axios.get(USER_API_BASE_URL + "/findParking/" + searchParking);
  }
  addBookingPay(bookid) {
    return axios.post(USER_API_BASE_URL + "/payment/" + bookid);
  }
}

export default new ApiCustomerService();
