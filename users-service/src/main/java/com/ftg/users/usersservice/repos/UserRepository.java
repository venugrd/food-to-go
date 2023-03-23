package com.ftg.users.usersservice.repos;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.ftg.users.usersservice.models.User;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


public interface UserRepository extends R2dbcRepository<User, Long>
{
    Flux<User> findByName(String name);
    Mono<Boolean> existsByEmail(String email);
    @Query("select * from Users where email = :email")
    Mono<User> findByEmail(String email);
    Mono<User> deleteById(int id);
}
