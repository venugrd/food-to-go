package com.ftg.users.usersservice.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ftg.users.usersservice.repos.DishRepository;
import com.ftg.users.usersservice.repos.ImageRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import com.ftg.users.usersservice.dto.DishDTO;
import com.ftg.users.usersservice.models.Dish;
import com.ftg.users.usersservice.models.Image;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/dish")
public class DishController {

    @Autowired
    DishRepository dishRepository;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    Environment environment;

    @PostMapping(value = "/add")
    public void addDish(@RequestPart MultipartFile file, @RequestPart("dto") DishDTO dto) throws IOException {

        Image img = new Image();
        img.setData(file.getBytes());
        img.setSize(file.getSize());
        img.setContentType(file.getContentType());

        String dl = "http://localhost:" + environment.getProperty("local.server.port") + "/image/";

        Dish dish = new Dish();
        dish.setDishName(dto.getDishName());
        dish.setPrice(dto.getPrice());
        dish.setServing(dto.getServing());
        dish.setCuisine(dto.getCuisine());
        dish.setDescription(dto.getDescription());
        dish.setRestaurant_id(dto.getRestaurant_id());

        Mono<Image> temp = imageRepository.save(img);

        temp.subscribe(t -> {
            t.setUrl(dl + String.valueOf(t.getId()));
            imageRepository.save(t).subscribe();
            dish.setImgURL(t.getUrl());
            dishRepository.save(dish).subscribe();
        });
    }

    @PostMapping(value = "/update")
    public void updateDish(@RequestPart(required = false) MultipartFile file, @RequestPart("dto") DishDTO dto)
            throws IOException {

        if (file == null) {
            Mono<Dish> dish = dishRepository.findById(dto.getDishId());
            dish.subscribe(t -> {
                t.setDishName(dto.getDishName());
                t.setPrice(dto.getPrice());
                t.setServing(dto.getServing());
                t.setCuisine(dto.getCuisine());
                t.setDescription(dto.getDescription());
                dishRepository.save(t).subscribe();
            });
        } else {
            Image img = new Image();
            img.setData(file.getBytes());
            img.setSize(file.getSize());
            img.setContentType(file.getContentType());

            String dl = "http://localhost:" + environment.getProperty("local.server.port") + "/image/";

            Mono<Image> temp = imageRepository.save(img);

            temp.subscribe(i -> {
                i.setUrl(dl + String.valueOf(i.getId()));
                imageRepository.save(i).subscribe();
                Mono<Dish> dish = dishRepository.findById(dto.getDishId());
                dish.subscribe(t -> {
                    t.setDishName(dto.getDishName());
                    t.setPrice(dto.getPrice());
                    t.setServing(dto.getServing());
                    t.setCuisine(dto.getCuisine());
                    t.setDescription(dto.getDescription());
                    t.setImgURL(i.getUrl());
                    dishRepository.save(t).subscribe();
                });
            });

        }

    }

    @GetMapping(value = "/{id}")
    public Mono<Dish> getDish(@PathVariable("id") Long dishId) {
        return dishRepository.findById(dishId);
    }

    @DeleteMapping(value = "delete/{id}")
    public Mono<?> deleteDish(@PathVariable("id") Long dishId) {
        return dishRepository.deleteById(dishId);
    }

}
