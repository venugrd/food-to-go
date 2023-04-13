package com.ftg.users.usersservice.repos;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import com.ftg.users.usersservice.models.Image;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ImageRepository extends R2dbcRepository<Image, Long> {
    
}
