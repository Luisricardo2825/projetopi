package com.pi.projetopi.model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component public interface RepoProduct  extends JpaRepository<Product, Long>{

}


