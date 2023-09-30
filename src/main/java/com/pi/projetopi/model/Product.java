package com.pi.projetopi.model;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Data
@Entity
public class Product {
	@JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    
    @JsonProperty
    private String name;
    
    @JsonProperty
    private String description;
    
    @JsonProperty
    private Double value;
    
    @JsonProperty
    private Integer amount;

}