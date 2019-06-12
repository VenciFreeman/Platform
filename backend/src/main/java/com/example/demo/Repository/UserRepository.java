package com.example.demo.Repository;

import com.example.demo.Entity.User;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
    User findUserById(Long userid);
    List<User> findAll();
}
