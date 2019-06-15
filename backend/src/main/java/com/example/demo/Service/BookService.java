package com.example.demo.Service;

import com.example.demo.Entity.Book;

import java.util.List;

public interface IBookService {
    List<Book> findAll();
	List<Book> SearchingOne();
}
