package com.ftg.users.usersservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ftg.users.usersservice.repos.RestaurantRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import com.ftg.users.usersservice.models.Restaurant;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value ="/restaurant")
public class RestaurantController {

    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping("/register")
    public Mono<Restaurant> postUser(@RequestBody Restaurant restaurant)
    {
        return restaurantRepository.save(restaurant);

    }

    @GetMapping("/restaurantList")
    public Flux<Restaurant> restaurantList()
    {
        return restaurantRepository.findAll();

    }

    @DeleteMapping("/delete/{id}")
    public Mono<Restaurant> delete(@PathVariable("id") Integer id) {
        return restaurantRepository.deleteById(id);
    }
    
}
