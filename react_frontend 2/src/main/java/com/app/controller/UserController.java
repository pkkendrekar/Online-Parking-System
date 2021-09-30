package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EditPasswordDTO;
import com.app.dto.EditProfileDTO;
import com.app.dto.ForgotPasswordDTO;
import com.app.dto.LoginRequest;
import com.app.dto.SignUpRequest;
import com.app.dto.responseDTO;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")


@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private IUserService userService;
	
	public UserController() {
		System.out.println("in user ctor of " + getClass().getName());
	}
	

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
		System.out.println("in auth " + request);
		// API : o.s.http.ResponseEntity<T> (T body,HttpStatus stsCode)
		return new ResponseEntity<>(
				userService.authenticateUser(request.getEmail(), request.getPassword()), HttpStatus.OK);

	}

	@PostMapping("/signUp")
	public ResponseEntity<?> signUpUser(@RequestBody SignUpRequest user){
		System.out.println("in Signup"+user);
		
	  return new ResponseEntity<>(userService.signUpUser(user),HttpStatus.CREATED);
	}
	
	
	
	@PutMapping("/forgot_password")
	public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordDTO dto) {
		System.out.println("in forgot pass " + dto);
		return new ResponseEntity<>(userService.forgotPassword(dto.getEmail(), dto.getNewPassword()), HttpStatus.OK);
	}

	@PutMapping("/edit_password")
	public ResponseEntity<?> editPassword(@RequestBody EditPasswordDTO dto) {
		System.out.println("in edit pass " + dto);
		return new ResponseEntity<>(
				userService.editPassword(dto.getEmail(), dto.getOldPassword(), dto.getNewPassword()), HttpStatus.OK);	}
	

	@PutMapping("/edit_profile")
	public ResponseEntity<?> editProfile(@RequestBody EditProfileDTO dto){
		System.out.println("in edit profile "+dto);
		return new ResponseEntity<>(userService.updateProfile(dto.getId(), dto.getMobile(), dto.getEmail(),dto.getGender()), HttpStatus.OK);
	}
	 
	
	@GetMapping(value="/findParking/{city}")
	public responseDTO<?> findParkingByCity(@PathVariable String city) {
		
		
		return new responseDTO<>(HttpStatus.OK, "Displaying Parking list from given city",
				userService.findParkingByCity(city));
	}
	
}



