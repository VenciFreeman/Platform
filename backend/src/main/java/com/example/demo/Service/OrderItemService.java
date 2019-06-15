package com.example.demo.Service;

import com.example.demo.Entity.OrderItem;

import java.util.List;

public interface IOrderItemService {
    List<OrderItem> findOrderItemsByOrderid(Long orderid);

    void addNewItem(Long orderid, String book, double price, int number);
}
