package com.example.demo.ServiceImplement;

import com.example.demo.Entity.OrderItem;
import com.example.demo.Repository.OrderItemRepository;
import com.example.demo.Service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemServiceImplement implements IOrderItemService{
    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> findOrderItemsByOrderid(Long orderid)
    {
        return orderItemRepository.findOrderItemsByOrderid(orderid);
    }

    public void addNewItem(Long orderid, String book, double price, int number)
    {
        OrderItem neworderitem = new OrderItem();
        neworderitem.setOrderId(orderid);
        neworderitem.setBook(book);
        neworderitem.setPrice(price);
        neworderitem.setNumber(number);
        orderItemRepository.save(neworderitem);
        return;
    }
}
