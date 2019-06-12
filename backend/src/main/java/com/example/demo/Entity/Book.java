package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "books")
public class Book
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="bookid")
    private Long id;

    @Column(name="bookname")
    private String bookname;

    @Column(name="author")
    private String author;

    @Column(name="isbn")
    private String isbn;

    @Column(name="stock")
    private Integer stock;

    @Column(name="price")
    private double price;

    @Column(name="cover")
    private String cover;

    public Book(){}

    public Long getId() { return id; }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(String sales) {
        this.stock = stock;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }
}
