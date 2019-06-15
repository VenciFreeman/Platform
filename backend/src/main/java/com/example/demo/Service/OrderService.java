package com.example.demo.Service;

import com.example.demo.Entity.Order;

import java.util.List;

public interface IOrderService {
    List<Order> findAll();

    void addNewOrder(int userid, String date, double totalprice);
}
