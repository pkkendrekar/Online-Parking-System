package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

public class reportDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Index no.")
	private Integer id;
	
	Integer parkingid;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate date;
	Integer Revenue;
	public reportDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public reportDTO(Integer id, Integer parkingid, LocalDate date, Integer revenue) {
		super();
		this.id = id;
		this.parkingid = parkingid;
		this.date = date;
		Revenue = revenue;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getParkingid() {
		return parkingid;
	}
	public void setParkingid(Integer parkingid) {
		this.parkingid = parkingid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Integer getRevenue() {
		return Revenue;
	}
	public void setRevenue(Integer revenue) {
		Revenue = revenue;
	}
	@Override
	public String toString() {
		return "reportDTO [id=" + id + ", parkingid=" + parkingid + ", date=" + date + ", Revenue=" + Revenue + "]";
	}
	

}
