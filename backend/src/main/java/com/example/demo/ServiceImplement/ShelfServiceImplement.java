package com.example.demo.ServiceImplement;

import com.example.demo.Entity.Book;
import com.example.demo.Repository.BookRepository;
import com.example.demo.Service.ShelfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelfServiceImplement implements IShelfService {
    @Autowired
    private BookRepository BookRepository;

    public List<Book> findAll() { return bookRepository.findAll(); }

    public Book findBookById(Long bookid)
    {
        return bookRepository.findBookById(bookid);
    }

    public void addNewBook(String bookname, String author, String isbn, Integer stock, double price, String cover)
    {
        Book result = new Book();
        result.setBookname(bookname);
        result.setAuthor(author);
        result.setIsbn(isbn);
        result.setStock(stock);
        result.setPrice(price);
        result.setCover(cover);
        bookRepository.save(result);
        return;
    }

    public void deleteAll()
    {
        bookRepository.deleteAll();
        return;
    }
}
