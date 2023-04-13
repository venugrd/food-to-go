package com.ftg.users.usersservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("users")
public class User {

    @Id
    @Column("user_id")
    private long id;
    private String name;
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

    
}
