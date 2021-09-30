package com.app.service;

import java.util.List;

import com.app.dto.SignUpRequest;
import com.app.dto.bookParkingDTO;
import com.app.pojos.Booking;
import com.app.pojos.Parking;
import com.app.pojos.User;



public interface IUserService {

	User authenticateUser(String email,String password);
	String signUpUser(SignUpRequest user);
	
	List<Parking> findParkingByCity (String city);
    Booking BookParking (bookParkingDTO park);
	
	/*User validateUser(String email, String password);*/
	String forgotPassword(String email, String password);
	
	
	
	String editPassword(String email, String oldPassword, String newPassword);
	String updateProfile(int id, String mobile, String email,String gender);

	List<Booking> viewbookingHistoryByCusId(Integer ab);
	String updateStatus(int bookid);

	
}
