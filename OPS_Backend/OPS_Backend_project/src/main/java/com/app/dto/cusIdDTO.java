package com.app.dto;

public class cusIdDTO {
	
	Integer u_id;

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	@Override
	public String toString() {
		return "cusIdDTO [u_id=" + u_id + ", getU_id()=" + getU_id() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}

	public cusIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public cusIdDTO(Integer u_id) {
		super();
		this.u_id = u_id;
	}
	
	

	

}
