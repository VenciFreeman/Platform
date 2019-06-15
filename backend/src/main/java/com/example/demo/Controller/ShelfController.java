package com.example.demo.Controller;

import com.example.demo.Entity.Book;
import com.example.demo.Service.ShelfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ShelfController {
    @Autowired
    private ShelfService shelfService;

    @GetMapping("/ShelfManager")
    @ResponseBody
    public Book getBook(Long bookid)
    {
        Book res = shelfService.findBookById(bookid);
        return res;
    }

    @GetMapping("/ShelfManager1")
    @ResponseBody
    public List<Book> getAllBook()
    {
        List<Book> res = shelfService.findAll();
        return res;
    }

    @PostMapping("/ShelfManager")
    @ResponseBody
    public String addBook((@RequestParam("bookname")String bookname, @RequestParam("author")String author, @RequestParam("isbn")String isbn, @RequestParam("stock")Integer stock, @RequestParam("price")double price,  @RequestParam("cover")String cover)
    {
        shelfService.addNewBook(bookid, author, isbn, stock, price, cover);
        return "success";
    }

}
