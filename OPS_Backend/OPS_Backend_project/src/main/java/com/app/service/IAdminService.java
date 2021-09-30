package com.app.service;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.dto.addNewUserDTO;
import com.app.dto.addParkingDTO;
import com.app.dto.cusIdDTO;
import com.app.dto.reportDTO;
import com.app.pojos.Booking;
import com.app.pojos.Parking;
import com.app.pojos.Role;
import com.app.pojos.User;

public interface IAdminService {
	String addNewUser(addNewUserDTO  dto); 
	List<User> findUserByRole(@Param("rl") Role role);
	
	Parking addParking(addParkingDTO  dto); 
	
	/* List<Parking> findUserByRole(@Param("rl") Role role) */
	List<Parking> displayAllParkings(String city); 
	
	List<Booking>	viewBookingByParkId( Integer parkId);
	
	User viewCustomerById(Integer u_id);
	List<?> viewReports();

}
