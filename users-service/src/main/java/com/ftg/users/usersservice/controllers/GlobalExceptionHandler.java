package com.ftg.users.usersservice.controllers;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = DuplicateKeyException.class)
    public ResponseEntity<Object> duplicateEmail()
    {
        return new ResponseEntity<>("Email already in use",HttpStatus.CONFLICT);
    }
    
}
