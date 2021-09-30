import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screen/home/Login";
import SignUp from "./screen/home/SignUp";

import HomeScreen from "./screen/home/HomeScreen";
import AboutScreen from "./screen/home/AboutScreen";
import HowItWorkScreen from "./screen/home/HowItWorkScreen";
import HelpScreen from "./screen/home/HelpScreen";
import ContactScreen from "./screen/home/ContactScreen";
import adminCommon from "./screen/admin/adminCommon";
import LogOut from "./screen/home/LogOut";
import userProfile from "./screen/home/userProfile";
import editprofile from "./screen/home/editProfile";
import updatePassword from "./screen/home/updatePassword";
import TermAndConditionScreen from "./screen/home/TermAndConditionScreen";
import PrivacyPolicyScreen from "./screen/home/PrivacyPolicyScreen";
import addParking from "./screen/admin/addParking";
import findParkingScreen from "./screen/user/findParkingScreen";
import paymentScreen from "./screen/user/paymentScreen";

import { ToastProvider, useToasts } from "react-toast-notifications";
import bookingHistoryScreen from "./screen/user/bookingHistory";
import viewBookingScreen from "./screen/admin/viewBookings";
import customerDetailsScreen from "./screen/admin/customerDetails";
import viewParkingScreen from "./screen/admin/viewParkings";
import revenueReportScreen from "./screen/admin/revenueReports";

import { ToastContainer, toast } from "react-toastify"; //react public notification libraries
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Router>
        
      <ToastContainer />
        <div className="container">
          <Switch>
            {/* <Route path="/" exact component={ListUserComponent} />
            <Route path="/users" component={ListUserComponent} /> */}
            <Route path="/home" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route path="/work" component={HowItWorkScreen} />
            <Route path="/help" component={HelpScreen} />
            <Route path="/contact" component={ContactScreen} />
            <Route path="/admin" component={adminCommon} />
            <Route path="/viewbooking" component={viewBookingScreen} />
            <Route path="/customerdetails" component={customerDetailsScreen} />
            <Route path="/myaccount/profile" component={userProfile} />
            <Route
              path="/view_bookingHistoryByCusId"
              component={bookingHistoryScreen}
            />
            <Route path="/edit_profile" component={editprofile} />
            <Route
              path="/termsnconditions"
              component={TermAndConditionScreen}
            />
            <Route path="/reports" component={revenueReportScreen}/>
            <Route path="/display_parkings" component={viewParkingScreen} />
            <Route path="/privacypolicy" component={PrivacyPolicyScreen} />
            <Route path="/show-search-parking" component={findParkingScreen} />
            <Route path="/payment" component={paymentScreen} />
            <Route path="/addParking" component={addParking} />
            <Route path="/edit_password" component={updatePassword} />
            <Route path="/logout" component={LogOut} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
