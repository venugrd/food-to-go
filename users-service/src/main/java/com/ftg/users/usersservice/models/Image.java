package com.ftg.users.usersservice.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Data
@Table("image")
public class Image {

    @Id
    @Column("image_id")
    private long id;
    @Column("size")
    private Long size;
    @Column("img_data")
    private byte[] data;
    @Column("img_url")
    private String url;
    @Column("content_type")
    private String contentType;
    
}
