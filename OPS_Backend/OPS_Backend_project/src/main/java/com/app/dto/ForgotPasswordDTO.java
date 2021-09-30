package com.app.dto;

public class ForgotPasswordDTO {
	private String email;
	private String newPassword;
	private String confirmPassword;
	
	public ForgotPasswordDTO() {
		
	}

	public ForgotPasswordDTO(String email, String newPassword, String confirmPassword) {
		super();
		this.email = email;
		this.newPassword = newPassword;
		this.confirmPassword = confirmPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	@Override
	public String toString() {
		return "ForgotPasswordDTO [email=" + email + ", newPassword=" + newPassword + ", confirmPassword="
				+ confirmPassword + "]";
	}
	
}
