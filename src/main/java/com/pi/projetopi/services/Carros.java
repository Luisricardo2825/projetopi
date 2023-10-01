package com.pi.projetopi.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pi.projetopi.model.ErrorRes;
import com.pi.projetopi.model.Product;
import com.pi.projetopi.model.RepoProduct;

@RestController
public class Carros {
	// Com o @Autowired não é necessário criar um construtor
	@Autowired
	RepoProduct repository;
	private static final ObjectMapper mapper = new ObjectMapper();

	@GetMapping(value = "/carros", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String getAll(@RequestParam(value = "name", defaultValue = "World") String name)
			throws JsonProcessingException {

		String jsonString = mapper.writeValueAsString(repository.findAll());
		return jsonString;
	}

	@GetMapping(value = "/carros/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<String> getOne(@PathVariable Long id) throws JsonProcessingException {
		Optional<Product> prod = repository.findById(id);
		if (!prod.isPresent())
			return new ResponseEntity<String>(mapper.writeValueAsString(new Error("Carro não encontrado")),
					HttpStatus.NOT_FOUND);
		String jsonString = mapper.writeValueAsString(prod.get());

		return new ResponseEntity<String>(jsonString, HttpStatus.OK);

	}

	@PostMapping(value = "/carros", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<String> create(@RequestBody Product product) throws JsonProcessingException {
		Product prod = repository.save(product);
		String jsonString = mapper.writeValueAsString(prod);
		return new ResponseEntity<String>(jsonString, HttpStatus.CREATED);

	}

	@DeleteMapping(value = "/carros/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<String> delete(@PathVariable Long id) throws JsonProcessingException {
		Optional<Product> prod = repository.findById(id);
		boolean exist = false;
		if (prod.isPresent()) {
			repository.deleteById(id);
			exist = true;
		}
		if (!exist)
			return new ResponseEntity<String>("{\"message\":\"Carro não encontrado\"}", HttpStatus.NOT_FOUND);

		String jsonString = mapper.writeValueAsString(prod);
		return new ResponseEntity<String>(jsonString, HttpStatus.CREATED);
	}
}