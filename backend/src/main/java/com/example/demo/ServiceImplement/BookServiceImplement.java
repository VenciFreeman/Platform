package com.example.demo.ServiceImplement;

import com.example.demo.Entity.Book;
import com.example.demo.Repository.BookRepository;
import com.example.demo.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImplement implements IBookService{
    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll()
    {
        return bookRepository.findAll();
    }
	
	public List<Book> SearchingOne()
	{
		return bookRepository.SearchingOne();
	}
}
