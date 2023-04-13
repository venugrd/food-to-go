package com.ftg.users.usersservice.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ftg.users.usersservice.repos.DishRepository;
import com.ftg.users.usersservice.repos.ImageRepository;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import com.ftg.users.usersservice.models.Dish;
import com.ftg.users.usersservice.models.Image;

@RestController
@CrossOrigin(origins = "")
@RequestMapping(value ="/image")
public class ImageController {


    @Autowired
    ImageRepository imageRepository;

    @Autowired
    DishRepository dishRepository;

    @GetMapping("{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable Long id) {
        
        Mono<Image> img = imageRepository.findById(id);
        Image i = img.block();
        return ResponseEntity.ok()
                             .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + i.getId() + "\"")
                             .contentType(MediaType.valueOf(i.getContentType()))
                             .body(i.getData());
    }

    
}
