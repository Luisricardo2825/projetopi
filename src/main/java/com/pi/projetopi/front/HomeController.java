package com.pi.projetopi.front;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HomeController {
    
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
