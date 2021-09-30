package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

	@Entity
	@Table(name= "booking_details")
	public class Booking {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="booking_id")
		private Integer bookid;
		
		private Integer userid;
		private Integer parkingid;
		private Integer duration;
		
		//time_in
		
		@DateTimeFormat(pattern = "HH:mm" )
		private LocalTime intime;
		
		
		@DateTimeFormat(pattern = "dd-MM-yyyy")
		private LocalDate date;
		
		private Integer rate;
		private Integer payment;
		private Integer status = null;
		
		
		public Booking() {
			super();
			
		}
		
		


		public Booking(Integer bookid, Integer userid, Integer parkingid, Integer duration, LocalTime intime,
				LocalDate date, Integer rate, Integer payment, Integer status) {
			super();
			this.bookid = bookid;
			this.userid = userid;
			this.parkingid = parkingid;
			this.duration = duration;
			this.intime = intime;
			this.date = date;
			this.rate = rate;
			this.payment = payment;
			this.status = status;
		}




		public Integer getBookid() {
			return bookid;
		}


		public void setBookid(Integer bookid) {
			this.bookid = bookid;
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


		public Integer getStatus() {
			return status;
		}


		public void setStatus(Integer status) {
			this.status = status;
		}




		@Override
		public String toString() {
			return "Booking [bookid=" + bookid + ", userid=" + userid + ", parkingid=" + parkingid + ", duration="
					+ duration + ", intime=" + intime + ", date=" + date + ", rate=" + rate + ", payment=" + payment
					+ ", status=" + status + "]";
		}
		
		
		




		
		
		
		
		

		
	

}
