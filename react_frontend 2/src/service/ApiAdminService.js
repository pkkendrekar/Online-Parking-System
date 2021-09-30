import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/admin";

class ApiAdminService {
  //user == admin

  //Create Account
  //return Successfully msg
  addpark(park) {
    return axios.post(USER_API_BASE_URL + "/add_parking/", park);
  }

  fetchHistoryList(parkingid, booking) {
    return axios.get(
      USER_API_BASE_URL + "/view_bookingByParkId/" + parkingid,
      booking
    );
  }

  fetchUserDetails(u_id, user) {
    return axios.get(USER_API_BASE_URL + "/view_customerById/" + u_id, user);
  }

  fetchParkingList(city,parkings) {
    return axios.get(
      USER_API_BASE_URL + "/display_parkings/"+ city,parkings);
  }

  fetchReportList( ) {
    return axios.get(
      USER_API_BASE_URL + "/reports" );
  }
}

export default new ApiAdminService();
