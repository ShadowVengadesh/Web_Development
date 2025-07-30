package com.EcommerceApi.EcommerceApiProject.Services;

import com.EcommerceApi.EcommerceApiProject.Products;
import com.EcommerceApi.EcommerceApiProject.Repo.homeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class homeService {


    @Autowired
    homeRepo r;
    public List<Products> getProducts(){
        return r.findAll();
    }
}
