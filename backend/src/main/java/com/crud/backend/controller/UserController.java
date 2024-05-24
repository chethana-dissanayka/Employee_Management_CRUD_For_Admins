package com.crud.backend.controller;

import com.crud.backend.exception.UserNotFoundException;
import com.crud.backend.model.User;
import com.crud.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//connect backend to frontend port
@CrossOrigin("http://localhost:3000")

public class UserController {

    @Autowired
    private UserRepo userRepo;

// create user in user table ccalled path /user
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }


    // get all users from user table using /users path
    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepo.findAll();
    }


    //find specific user details
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
//edit specfic user details
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepo.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepo.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
//delete specific user
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }


}
