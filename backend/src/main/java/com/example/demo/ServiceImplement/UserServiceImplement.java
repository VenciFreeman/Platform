package com.example.demo.ServiceImplement;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplement implements UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() { return userRepository.findAll(); }

    public User findUserById(Long userid)
    {
        return userRepository.findUserById(userid);
    }

    public void addNewUser(String username, String password, String email, String phone)
    {
        User result = new User();
        result.setUsername(username);
        result.setEmail(email);
        result.setPassword(password);
        result.setPhone(phone);
        result.setRole("customer");
        userRepository.save(result);
        return;
    }

    public void deleteAll()
    {
        userRepository.deleteAll();
        return;
    }
}
