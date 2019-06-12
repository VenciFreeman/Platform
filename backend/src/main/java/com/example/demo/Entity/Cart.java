package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "carts")
public class Cart
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="id")
    private Long id;

    @Column(name="book")
    private String book;

    @Column(name="price")
    private double price;

    @Column(name="number")
    private int number;

    @Column(name="user")
    private int user;

    public Cart(){}

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }
}
