package com.ftg.users.usersservice.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class DishDTO {

    private String dishName;
    private long dishId;
    private long price;
    private long serving;
    private String cuisine;
    private long restaurant_id;
    private String description;
    private MultipartFile img;
   
    
}
