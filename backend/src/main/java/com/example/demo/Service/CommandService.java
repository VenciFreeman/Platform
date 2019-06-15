package com.example.demo.Service;

import com.example.demo.Entity.Order;

import java.util.List;

public interface ICommandService {

    List<Order> findAll();
    Order findById(Long bookid);

    Order addNewCommand(String command);

    void deleteAll();
}



