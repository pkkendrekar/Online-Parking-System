package com.app.dto;


import com.app.pojos.Role;

public class SignUpRequest {
	private String name;
	private String email;
	private String password;
	private String mobile;
	private String gender;
	private Role role;
	

	public SignUpRequest() {

	}

	public SignUpRequest(String name, String email, String password, String mobile,String gender, Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.mobile = mobile;
		this.gender = gender;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	@Override
	public String toString() {
		return "SignUpRequest [name=" + name + ", email=" + email + ", password=" + password
				+ ", mobile=" + mobile + ",gender=" + gender +", role=" + role + "]";
	}

}
