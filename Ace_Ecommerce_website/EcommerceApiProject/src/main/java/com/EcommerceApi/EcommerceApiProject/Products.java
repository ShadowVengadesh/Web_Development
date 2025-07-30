package com.EcommerceApi.EcommerceApiProject;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Products {
    @Id
    private long pId;
    private String pName;
    private String imgUrl;
    private int quantity;
    private double ratings;

}
