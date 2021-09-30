package com.app.dto;

import org.springframework.http.HttpStatus;

public class responseDTO<T> {
	private HttpStatus status;
	private String message;
	private T result;
	public responseDTO() {
		// TODO Auto-generated constructor stub
	}
	public responseDTO(HttpStatus status, String message, T result) {
		super();
		this.status = status;
		this.message = message;
		this.result = result;
	}
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	@Override
	public String toString() {
		return "ResponseDTO [status=" + status + ", message=" + message + ", result=" + result + "]";
	}
	

}

