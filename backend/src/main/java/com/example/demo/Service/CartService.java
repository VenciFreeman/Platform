package com.example.demo.Service;

import com.example.demo.Entity.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> findCartsByUser(int user);

    void addNewBook(int userid, String book, double price, int number);

    boolean addExistingBook(String book);

    void deleteAll();
}
