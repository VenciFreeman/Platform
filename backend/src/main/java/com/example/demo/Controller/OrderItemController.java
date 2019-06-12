package com.example.demo.Controller;

import com.example.demo.Entity.OrderItem;
import com.example.demo.Service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping("/OrderItemManager")
    @ResponseBody
    public List<OrderItem> getItem(@RequestParam("orderid")Long orderid)
    {
        List<OrderItem> result = orderItemService.findOrderItemsByOrderid(orderid);
        return result;
    }

    @PostMapping("/OrderItemManager")
    @ResponseBody
    public String addItem(@RequestParam("orderid")Long orderid, @RequestParam("book")String book, @RequestParam("price")double price, @RequestParam("number")int number)
    {
        orderItemService.addNewItem(orderid, book, price, number);
        return "success";
    }
}
