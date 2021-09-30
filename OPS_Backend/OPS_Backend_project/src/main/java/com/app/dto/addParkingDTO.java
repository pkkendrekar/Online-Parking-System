package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class addParkingDTO 
{	
	private String city;
	private String area;
	private String location;
	private int total_parkings;
	private int avail_parkings;
	private double rate;
	
	
	
	public addParkingDTO(String city, String area, String location, int total_parkings, int avail_parkings,
			double rate) {
		super();
		this.city = city;
		this.area = area;
		this.location = location;
		this.total_parkings = total_parkings;
		this.avail_parkings = avail_parkings;
		this.rate = rate;
	}


	

public addParkingDTO() {
	// TODO Auto-generated constructor stub
}
	
	
	
	
	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getArea() {
		return area;
	}


	public void setArea(String area) {
		this.area = area;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public int getTotal_parkings() {
		return total_parkings;
	}


	public void setTotal_parkings(int total_parkings) {
		this.total_parkings = total_parkings;
	}


	public int getAvail_parkings() {
		return avail_parkings;
	}


	public void setAvail_parkings(int avail_parkings) {
		this.avail_parkings = avail_parkings;
	}


	public double getRate() {
		return rate;
	}


	public void setRate(double rate) {
		this.rate = rate;
	}


	




}
