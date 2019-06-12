import React, { Component } from 'react';
import {notification } from "antd";
import { Button } from 'semantic-ui-react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./App.css";



class BookPage extends Component{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }
    addBook = async (e) => {
        let url = "http://localhost:8080/CartManager?operation=add&userid=1&book=" + this.props.book.Book + "&price=" + this.props.book.Price.toString();
        let res = await fetch(url, {
            method: "post",
            headers: {
                "Accept": "text/html",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
        });
        let result = await res.text();
        if("success" === result)
        {
            notification.open({
                message: "成功加入购物车",
            });
        }
        else
        {
            notification.open({
                message: "加入失败",
            });
        }
    }
    render()
    {
        return(
        <Paper className="paper">                   
        <Table className="table">
            <TableHead>
                <TableRow>
                    <TableCell>书名</TableCell>
                    <TableCell>作者</TableCell>
                    <TableCell>价格</TableCell>
                    <TableCell>库存</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>           
                    <TableRow>
                    <TableCell component="th" scope="row" >
                        {this.props.book.Book}
                    </TableCell>
                    <TableCell>
                        {this.props.book.Author}
                    </TableCell>
                    <TableCell >
                        {this.props.book.Price}
                    </TableCell>
                    <TableCell >
                        {this.props.book.Stock}
                    </TableCell>
                    </TableRow>   
            </TableBody>
            <TableCell ></TableCell>
            <Button type="primary" onClick={ this.addBook }>加入购物车</Button>  
        </Table>
        
        <img
                src={require("./cover/1.jpg")}
                alt={this.props.book.Book}
                width="320" height="480"
                />  
        
    </Paper>
        );
    }
}

export default BookPage;