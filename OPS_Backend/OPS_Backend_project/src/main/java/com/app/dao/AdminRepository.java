package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Role;
import com.app.pojos.User;

public interface AdminRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.role=:rl")
	List<User> findUserByRole(@Param("rl") Role role);
	
	

	
}
