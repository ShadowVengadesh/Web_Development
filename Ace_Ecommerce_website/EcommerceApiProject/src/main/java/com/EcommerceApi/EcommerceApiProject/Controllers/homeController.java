package com.EcommerceApi.EcommerceApiProject.Controllers;

import com.EcommerceApi.EcommerceApiProject.Products;
import com.EcommerceApi.EcommerceApiProject.Services.homeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class homeController {
    @Autowired
    homeService s;
    @GetMapping("/")
    public List<Products> getProducts(){
        return s.getProducts();
    }
}
