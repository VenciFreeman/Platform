package com.example.demo.Controller;

import com.example.demo.Entity.Cart;
import com.example.demo.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/CartManager")
    @ResponseBody
    public List<Cart> getCart()
    {
        List<Cart> res = cartService.findCartsByUser(1);
        return res;
    }

    @PostMapping("/CartManager")
    @ResponseBody
    public String printCart(@RequestParam("operation")String operation, @RequestParam("userid")int userid, @RequestParam("book")String book, @RequestParam("price")double price)
    {
        if(operation.equals("add"))
        {
            if(!cartService.addExistingBook(book))
            {
                cartService.addNewBook(userid, book, price, 1);
            }
        }
        else if(operation.equals("removeall"))
        {
            cartService.deleteAll();
        }
        else
        {
            return "invalid operation";
        }
        return "success";
    }
}
