package com.ftg.users.usersservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("restaurant")
public class Restaurant{

    @Id
    private long id;
    @Column("owner_name")
    private String ownerName;
    @Column("restaurant_name")
    private String restaurantName;
    @Column("phone_no")
    private String phoneNo;
    private String email;
    @Column("address_line_1")
    private String addressLine1;
    @Column("address_line_2")
    private String addressLine2;
    private String landmark;
    private String city;
    private String pincode;
    private double latitude;
    private double longitude;
     
    //owner, restaurant name, 

    
}
