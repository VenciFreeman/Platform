package com.example.demo.Repository;

import com.example.demo.Entity.Cart;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartRepository extends CrudRepository<Cart, Long> {
    List<Cart> findCartsByUser(int user);
}