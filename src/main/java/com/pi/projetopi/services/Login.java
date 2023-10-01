package com.pi.projetopi.services;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.pi.projetopi.model.LoginReq;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Login {
	private SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();

	@PostMapping("/user/login")
	public void login(@RequestBody LoginReq loginRequest, HttpServletRequest request, HttpServletResponse response) {
		/*
		 * String email = loginRequest.getEmail(); String pass =
		 * loginRequest.getPassword(); UsernamePasswordAuthenticationToken token =
		 * UsernamePasswordAuthenticationToken .unauthenticated(email,
		 * loginRequest.getPassword()); Authentication authentication =
		 * authenticationManager.authenticate(token); SecurityContext context =
		 * securityContextHolderStrategy.createEmptyContext();
		 * context.setAuthentication(authentication);
		 * securityContextHolderStrategy.setContext(context);
		 * securityContextRepository.saveContext(context, request, response);
		 */
	}
}
