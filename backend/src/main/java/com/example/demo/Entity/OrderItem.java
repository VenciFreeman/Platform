package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "orderitems")
public class OrderItem
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="id")
    private Long id;

    @Column(name="orderid")
    private Long orderid;

    @Column(name="book")
    private String book;

    @Column(name="price")
    private double price;

    @Column(name="number")
    private int number;

    public OrderItem(){}

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getOrderId() { return orderid; }

    public void setOrderId(Long orderid) { this.orderid = orderid; }

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
}
