package com.example.demo.Service;

import com.example.demo.Entity.Book;

import java.util.List;

public interface IShelfService {

    List<Book> findAll();
    Book findBookById(Long bookid);

    Book addNewBook(String bookname, String author, String isbn, Integer stock, double price, String cover);

    void deleteAll();
}

// public interface EditService{
//    void editBook(Book book);
//}



