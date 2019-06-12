package com.example.demo.Repository;

import com.example.demo.Entity.OrderItem;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderItemRepository extends CrudRepository<OrderItem, Long> {
    List<OrderItem> findOrderItemsByOrderid(Long orderid);
}