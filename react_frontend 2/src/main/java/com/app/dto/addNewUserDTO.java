package com.app.dto;

import com.app.pojos.Role;

public class addNewUserDTO 
{	
	
private Integer id; 
private String name;
//private String lastName;
//private int age;
private String mobile;
private String email;
private String password;
//private String confirmPassword;
private String gender;
//private String street;
//private int pinCode;
//private String state;
//private String city;

private Role role;

public addNewUserDTO(Integer id, String name,
		String mobile, String email, String password, 
		String gender, Role role) {
	super();
	this.id = id;
	this.name = name;
	this.mobile = mobile;
	this.email = email;
	this.password = password;
	this.gender = gender;
	this.role = role;
}



public addNewUserDTO()
{
	// TODO Auto-generated constructor stub
}



public Integer getId() {
	return id;
}



public void setId(Integer id) {
	this.id = id;
}




public Role getRole() {
	return role;
}



public void setRole(Role role) {
	this.role = role;
}



public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getMobile() {
	return mobile;
}
public void setMobile(String mobile) {
	this.mobile = mobile;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}



@Override
public String toString() {
	return "addNewUserDTO [id=" + id + ", name=" + name + ", mobile=" + mobile + ", email=" + email + ", password="
			+ password + ", gender=" + gender + ", role=" + role + "]";
}



}
