package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="User_Details")
public class User {
	@Id //PK
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="U_ID")
	private Integer id; 
	@NotBlank(message = "Name is required")
	@Length(min = 3, max = 15, message = "Invalid len of Name")
	@Column(length = 20,name = "U_NAME")
	private String name;
	@Column(unique = true,name = "EMAIL")
	private String email;
    @Column(unique = true,name = "MOB")
	private String mobile;
	@Column(name="GENDER")
	private String gender;
	@Column(length = 20,nullable = false,name="PASS")
	@JsonIgnore
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	
public User() {
	// TODO Auto-generated constructor stub
}

public User(Integer id,
		String name,
		String email, String mobile,
		String gender, String password, 
		Role role) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.mobile = mobile;
	this.gender = gender;
	this.password = password;
	this.role = role;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getMobile() {
	return mobile;
}

public void setMobile(String mobile) {
	this.mobile = mobile;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public Role getRole() {
	return role;
}

public void setRole(Role role) {
	this.role = role;
}

@Override
public String toString() {
	return "User [id=" + id + ", name=" + name + ", email=" + email + ", mobile=" + mobile + ", gender=" + gender
			+ ", role=" + role + "]";
}


}
