package com.app.dto;

public class EditProfileDTO {
	
private Integer id; 
private String name;
//private String lastName;
//private int age;
private String mobile;
private String email;
//private String confirmPassword;
private String gender;
//private String street;
//private int pinCode;
//private String state;
//private String city;



public Integer getId() {
	return id;
}


public EditProfileDTO() {
	// TODO Auto-generated constructor stub
}



public EditProfileDTO(Integer id, String name, String mobile, String email, String gender) {
	super();
	this.id = id;
	this.name = name;
	this.mobile = mobile;
	this.email = email;
	this.gender = gender;
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
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
@Override
public String toString() {
	return "EditProfileDTO [id=" + id + ", name=" + name + ", mobile=" + mobile + ", email=" + email + ", gender="
			+ gender + "]";
}
	



	

}
