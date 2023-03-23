package com.ftg.users.usersservice.repos;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.ftg.users.usersservice.models.Restaurant;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


public interface RestaurantRepository extends R2dbcRepository<Restaurant, Long>
{
    Flux<Restaurant> findByRestaurantName(String name);
    Mono<Restaurant> findByEmail(String email);
    Mono<Restaurant> deleteById(int id);
}