package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.addNewUserDTO;
import com.app.dto.addParkingDTO;
import com.app.dto.responseDTO;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.service.IAdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private IAdminService adminService;

	/*
	 * @Autowired private ParkingRepository parkRepo;
	 */

	@PostMapping("/add-newCustomer")
	public ResponseEntity<?> addNewUser(@RequestBody addNewUserDTO dto) {
		System.out.println("in add newCustomer " + dto);
		return new ResponseEntity<>(adminService.addNewUser(dto), HttpStatus.CREATED);
	}

	@GetMapping("/customer_list")
	public ResponseEntity<?> findUserByRole(@Param("rl") Role role) {
		System.out.println("in view customer ");
		List<User> user = adminService.findUserByRole(Role.CUSTOMER);
		if (user.size() == 0) {
			return new ResponseEntity<>("No Matching Customer Found!!", HttpStatus.OK);
		}
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	/*
	 * @PostMapping("/add-parking") public ResponseEntity<?> addParking(@RequestBody
	 * addParkingDTO dto){ System.out.println("in add newParking "+dto); return new
	 * ResponseEntity<>(adminService.addParking(dto), HttpStatus.CREATED); }
	 */
	/*
	 * @PostMapping("/add_parking") public responseDTO<?> addParking(@RequestBody
	 * addParkingDTO dto) { System.out.println("in add newParking"); return new
	 * responseDTO<>(HttpStatus.OK, "Parking added successfully",
	 * adminService.addParking(dto)); }
	 */
	
	@PostMapping("/add_parking")
	public responseDTO<?> addParking(@RequestBody addParkingDTO  parkingDTO) {
		System.out.println("in add parking  " + parkingDTO);
		return new responseDTO<>(HttpStatus.OK, "new parking added", adminService.addParking(parkingDTO));
	}


	@GetMapping("/display_parkings")
	public responseDTO<?> displayllParkings() {
		System.out.println("in get al users");
		return new responseDTO<>(HttpStatus.OK, "Displaying Parking list successfully",
				adminService.displayAllParkings());
	}

	/*
	 * public ResponseEntity<?> displayParking(){
	 * System.out.println("in view parking "); List<Parking> parking =
	 * parkService.displayParking(); if(user.size() == 0) { return new
	 * ResponseEntity<>("No Matching Customer Found!!", HttpStatus.OK); } return new
	 * ResponseEntity<>(user, HttpStatus.OK);
	 */
	// }
}
