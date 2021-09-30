package com.app.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.SignUpRequest;
import com.app.pojos.Parking;
import com.app.pojos.User;



public interface IUserService {

	User authenticateUser(String email,String password);
	String signUpUser(SignUpRequest user);
	
	List<Parking> findParkingByCity (String city);

	
	/*User validateUser(String email, String password);*/
	String forgotPassword(String email, String password);
	
	
	
	String editPassword(String email, String oldPassword, String newPassword);
	String updateProfile(int id, String mobile, String email,String gender);


	
}
