package com.ftg.users.usersservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("dishes")
public class Dish {

    @Id
    @Column("dish_id")
    private long id;
    @Column("dish_name")
    private String dishName;
    @Column("price")
    private long price;
    @Column("serving")
    private long serving;
    @Column("cuisine")
    private String cuisine;
    @Column("restaurant_id")
    private long restaurant_id;
    @Column("description")
    private String description;
    @Column("img_url")
    private String imgURL;
    
}
