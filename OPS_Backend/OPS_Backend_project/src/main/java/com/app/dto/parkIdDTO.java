package com.app.dto;

public class parkIdDTO {
	
	Integer parkId;

	public Integer getParkId() {
		return parkId;
	}

	public void setParkId(Integer parkId) {
		this.parkId = parkId;
	}

	public parkIdDTO(Integer parkId) {
		super();
		this.parkId = parkId;
	}

	@Override
	public String toString() {
		return "parkIdDTO [parkId=" + parkId + ", getParkId()=" + getParkId() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	public parkIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
