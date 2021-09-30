package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "parking_details")
public class Parking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="PARK_ID")
	private Integer id;
	private String city;
	private String area;
	private String location;
	private int total_parkings;
	private int avail_parkings;
	private double rate;
	
	
	public Parking(Integer id, String city, String area, String location, int total_parkings, int avail_parkings,
			double rate) {
		super();
		this.id = id;
		this.city = city;
		this.area = area;
		this.location = location;
		this.total_parkings = total_parkings;
		this.avail_parkings = avail_parkings;
		this.rate = rate;
	}

	public Parking() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Parking [id=" + id + ", city=" + city + ", area=" + area + ", location=" + location
				+ ", total_parkings=" + total_parkings + ", avail_parkings=" + avail_parkings + ", rate=" + rate
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}

	
	
	
}
