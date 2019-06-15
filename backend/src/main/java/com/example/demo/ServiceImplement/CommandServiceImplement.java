package com.example.demo.ServiceImplement;

import com.example.demo.Entity.Order;
import com.example.demo.Service.OrderService;
import com.example.demo.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandServiceImplement implements ICommandService{
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> findAll()
    {
        return orderRepository.findAll();
    }

    public void addNewCommand(String command)
    {
        Command newCommand = new Command();
        newCommand.setCommand(command);
        orderRepository.save(newCommand);
        return;
    };
}