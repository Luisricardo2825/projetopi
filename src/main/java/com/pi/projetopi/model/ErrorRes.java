package com.pi.projetopi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class ErrorRes {
	
	@JsonProperty
	private @NonNull String message;
	
	@JsonProperty
	private int code = 400;
}
