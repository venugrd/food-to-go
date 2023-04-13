package com.ftg.users.usersservice.repos;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import com.ftg.users.usersservice.models.Dish;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface DishRepository extends R2dbcRepository<Dish, Long> {

    @Query("Select * from dishes where restaurant_id=$1")
    Flux<Dish>  findByRestaurant(long r_id);
    
}
