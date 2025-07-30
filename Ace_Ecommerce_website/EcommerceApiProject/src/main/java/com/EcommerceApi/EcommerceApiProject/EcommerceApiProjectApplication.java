package com.EcommerceApi.EcommerceApiProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class EcommerceApiProjectApplication {

	public static void main(String[] args) {

		ApplicationContext context =SpringApplication.run(EcommerceApiProjectApplication.class, args);
		Products p=context.getBean(Products.class);
	}

}
