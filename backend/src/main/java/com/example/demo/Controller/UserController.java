package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/UserManager")
    @ResponseBody
    public User getUser(Long userid)
    {
        User res = userService.findUserById(userid);
        return res;
    }

    @GetMapping("/UserManager1")
    @ResponseBody
    public List<User> getAllUser()
    {
        List<User> res = userService.findAll();
        return res;
    }

    @PostMapping("/UserManager")
    @ResponseBody
    public String setcart(@RequestParam("username")String username, @RequestParam("password")String password, @RequestParam("email")String email, @RequestParam("phone")String phone)
    {
        userService.addNewUser(username, password, email, phone);
        return "success";
    }

}
