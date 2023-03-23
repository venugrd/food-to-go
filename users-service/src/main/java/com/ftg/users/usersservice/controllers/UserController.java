package com.ftg.users.usersservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ftg.users.usersservice.repos.UserRepository;
import com.ftg.users.usersservice.services.UserService;

import ch.qos.logback.core.joran.conditional.ElseAction;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import com.ftg.users.usersservice.Dao.RegisterStatus;
import com.ftg.users.usersservice.models.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value ="/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository usersRepository;
    
    
    public String successMessage(String name)
    {
        return "Successfully registered "+name;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> postUser(@RequestBody User user)
    {
        userService.registerUser(user);
        return new ResponseEntity<>("Registered "+user.getName(),HttpStatus.OK);
    }

    @PostMapping("/registeruser")
    public Mono<User> registerUser(@RequestBody User user)
    {
        // try{usersRepository.save(user).subscribe();
        //     return "ok";}
        // catch(Exception e)
        // {
        //     return e.getMessage();
        // }
       return usersRepository.save(user);

    }

    @DeleteMapping("/delete/{id}")
    public Mono<User> delete(@PathVariable("id") Integer id) {
        return usersRepository.deleteById(id);
    }

    @GetMapping("/getusers")
    public Mono<User> getUser(@RequestParam String email)
    {
        return usersRepository.findByEmail(email);
    }
    
}
