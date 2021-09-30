package com.app.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dao.ParkingRepository;
import com.app.dto.addNewUserDTO;
import com.app.dto.addParkingDTO;
import com.app.pojos.Parking;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ParkingRepository parkRepo;

	@Override
	public String addNewUser(addNewUserDTO dto) {
		User user = new User(dto.getId(), dto.getName(), dto.getEmail(), dto.getMobile(), dto.getGender(),
				dto.getPassword(), Role.CUSTOMER);

		adminRepo.save(user);

		return "New User Created Successfully!!";
	}

	@Override
	public List<User> findUserByRole(Role role) {
		if (role != null) {
			return adminRepo.findUserByRole(role);
		}
		return adminRepo.findAll();
	}

	@Override
	public Parking addParking(addParkingDTO dto) {
		//Parking parking = new Parking(dto.getTotal_parkings(),dto.getTotal_parkings(), dto.getRate());
		Parking parking = new Parking();
		BeanUtils.copyProperties(dto, parking);
		parking.setAvail_parkings(dto.getTotal_parkings());
		

		return parkRepo.save(parking);}
	
	@Override
	public List<Parking> displayAllParkings() {
		
		return parkRepo.findAll();
	}
}
