package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Booking;
import com.app.pojos.Parking;
import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, String> {
	Optional<User> findByEmailAndPassword(String email, String password);

	@Modifying
	@Query("update User u set u.password=:pwd where u.email=:em")
	void updatePassword(@Param("em") String email, @Param("pwd") String password);

	@Modifying
    @Query("update User u set u.mobile=:m, u.email=:em ,u.gender=:g  where u.id=:id ")
	void updateProfile(@Param("m") String mobile, @Param("em") String email, @Param("g") String gender,
			@Param("id") int id);

	
	@Query("select c from User c where c.id=:d")
	User viewCustomerById(@Param("d") Integer cusId);
	
	@Query("select b from Booking b where b.userid=:c")
	List<Booking> viewbookingHistoryByCusId(@Param("c") Integer userId);

}
