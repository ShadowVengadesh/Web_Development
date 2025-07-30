package com.EcommerceApi.EcommerceApiProject.Repo;

import com.EcommerceApi.EcommerceApiProject.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface homeRepo extends JpaRepository<Products,Integer> {

}
