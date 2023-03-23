package com.ftg.users.usersservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.ftg.users.usersservice.models.User;
import com.ftg.users.usersservice.repos.UserRepository;

import reactor.core.publisher.Mono;

@Service
public class UserService {

    @Autowired
    UserRepository usersRepository;

    @ExceptionHandler(value = DuplicateKeyException.class)
    public ResponseEntity<Object> duplicateEmail()
    {
        return new ResponseEntity<>("Email already in use",HttpStatus.CONFLICT);
    }

    public Mono<User> registerUser(User user) throws DuplicateKeyException
    {
        return usersRepository.save(user);
    }


    
}
