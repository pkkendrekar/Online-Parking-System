package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.format.annotation.DateTimeFormat;

public class bookParkingDTO {
	
	private Integer userid;
	private Integer parkingid;
	private Integer duration;
	private LocalTime intime;
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate date;
	private Integer rate;
	private Integer payment;
	
	
	public bookParkingDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	public bookParkingDTO(Integer userid, Integer parkingid, Integer duration, LocalTime intime, LocalDate date,
			Integer rate, Integer payment) {
		super();
		this.userid = userid;
		this.parkingid = parkingid;
		this.duration = duration;
		this.intime = intime;
		this.date = date;
		this.rate = rate;
		this.payment = payment;
	}

	

	public Integer getUserid() {
		return userid;
	}


	public void setUserid(Integer userid) {
		this.userid = userid;
	}


	public Integer getParkingid() {
		return parkingid;
	}


	public void setParkingid(Integer parkingid) {
		this.parkingid = parkingid;
	}


	public Integer getDuration() {
		return duration;
	}


	public void setDuration(Integer duration) {
		this.duration = duration;
	}


	public LocalTime getIntime() {
		return intime;
	}


	public void setIntime(LocalTime intime) {
		this.intime = intime;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public Integer getRate() {
		return rate;
	}


	public void setRate(Integer rate) {
		this.rate = rate;
	}


	public Integer getPayment() {
		return payment;
	}


	public void setPayment(Integer payment) {
		this.payment = payment;
	}


	@Override
	public String toString() {
		return "bookParkingDTO [userid=" + userid + ", parkingid=" + parkingid + ", duration=" + duration + ", intime="
				+ intime + ", date=" + date + ", rate=" + rate + ", payment=" + payment + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
}
