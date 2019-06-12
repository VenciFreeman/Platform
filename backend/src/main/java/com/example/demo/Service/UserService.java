package com.example.demo.Service;

import com.example.demo.Entity.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User findUserById(Long userid);

    void addNewUser(String username, String password, String email, String phone);

    void deleteAll();
}
