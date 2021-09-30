package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookingRepository;
import com.app.dao.ParkingRepository;
import com.app.dao.UserRepository;
import com.app.dto.SignUpRequest;
import com.app.dto.bookParkingDTO;
import com.app.pojos.Booking;
import com.app.pojos.Parking;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.user_excs.UserHandlingException;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private ParkingRepository parkRepo;

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	BookingRepository bookRepo;

	@Override
	public User authenticateUser(String email, String pwd) {
		

		return userRepo.findByEmailAndPassword(email, pwd)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials!!!!"));
	}//rets in case of success DETACHED customer pojo to the caller or throws un checked custom exc


	@Override
	public String signUpUser(SignUpRequest user) {
		 User user1 =new User();
		 System.out.println("in before service"+user1);
		 BeanUtils.copyProperties(user, user1);
		 user1.setRole(Role.CUSTOMER);
		 System.out.println("in service"+user1);
		 userRepo.save(user1);
		 return "SignUp successfully";
	} 
	
//	@Override
//	public User validateUser(String email, String password) {
//		return userRepo.findByEmailAndPassword(email, password)
//				.orElseThrow(() -> new UserHandlingException("Invalid Credentials!!"));
//	}


	@Override
	public String forgotPassword(String email, String password) {
		userRepo.updatePassword(email, password);
		return "Password Updated Successfully!!";
	}

	@Override
	public String editPassword(String email, String oldPassword, String newPassword) {
		Optional<User> user = userRepo.findByEmailAndPassword(email, oldPassword);
		if(user.isPresent()) {
			userRepo.updatePassword(email, newPassword);
			return "Password Updated Successfully!!";
		}else
			return "Invalid Email or Password!!";
	}

	@Override
	public String updateProfile(int id, String mobile, String email,String gender) {
		userRepo.updateProfile(mobile, email, gender,id);
		return "Profile Updated Successfully!!";
	}


	@Override
	public List<Parking> findParkingByCity(String city) {
		
		return parkRepo.findParkingByCity(city);
	}


	@Override
	public Booking BookParking(bookParkingDTO park) {
		Booking booking = new Booking();
		BeanUtils.copyProperties(park, booking);
		
		booking.setPayment(park.getRate()*park.getDuration());
		System.out.println(booking.toString());
		bookRepo.save(booking);
		
		return booking;
	}


	@Override
	public List<Booking> viewbookingHistoryByCusId(Integer ab) {
		
		return userRepo.viewbookingHistoryByCusId(ab);
	}


	@Override
	public String updateStatus(int bookid) {
		
		bookRepo.updateStatus(bookid);
		return "Thanks Payment is sucessful!!!";
	}

	
	
}


