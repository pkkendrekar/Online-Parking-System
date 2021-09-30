package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Booking;

public interface BookingRepository extends JpaRepository<Booking,Integer> {
	
	@Query("select b from Booking b where b.parkingid=:c")
	List<Booking> viewBookingByParkId(@Param("c") Integer parkId);
	
	

	@Modifying
	@Query("update Booking p set p.status=1 where p.bookid=:bid")
	void updateStatus(@Param("bid") Integer bid);
	
	
	@Query(value="select distinct parkingid,date,sum(payment) from booking_details where status=1 group by parkingid,date",nativeQuery=true)
	List<?> viewReports();
}
