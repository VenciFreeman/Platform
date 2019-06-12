package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="id")
    private Long id;

    @Column(name="user")
    private int user;

    @Column(name="totalprice")
    private double totalprice;

    @Column(name="date")
    private String date;

    public Order(){}

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public double getTotalPrice() { return totalprice; }

    public void setTotalPrice(double totalprice) { this.totalprice = totalprice; }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
