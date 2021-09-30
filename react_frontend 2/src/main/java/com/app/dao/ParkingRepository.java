package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Parking;

public interface ParkingRepository extends JpaRepository<Parking,Integer> {
	
	
	@Query("select p from Parking p where p.city=:c")
	List<Parking> findParkingByCity(@Param("c") String city);

	
}
