import React, { Component } from "react";
import { notification } from "antd";
import { Button } from 'semantic-ui-react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';


let order = {
  Book: true,
  Number: true,
  Price: true,
  TotalPrice: true,
}
let orderBy = 'Book'
class ShoppingList extends Component{
  constructor(props)
  {
    super(props);
    this.state = { cart: [],
        customid: this.props.uID,
        total: 0 
      };
  }
  getCart = async (e) => {
    let res = await fetch("http://localhost:8080/CartManager",{
      method: "get",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    let result = await res.json();
    let itemlist = [];
    let totalOfAll = 0;
    for(let i = 0; i < result.length; i++)
    {
      itemlist.push({ Book: result[i]["book"],  Price: result[i]["price"], Number: result[i]["number"], TotalPrice: result[i]["price"]*result[i]["number"] });
      totalOfAll += result[i]["price"]*result[i]["number"];
    }
    this.setState({ cart : itemlist, total: totalOfAll });
  }
  clearCart = async (e) => {
    await fetch("http://localhost:8080/CartManager?operation=removeall&userid=0&book=null&price=0",{
      method: "post",
      headers: {
        "Accept": "text/html",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    this.setState({ cart: [], total: 0 });
  }
  payBill = async (e) => {
    await fetch("http://localhost:8080/OrderManager?userid=1&date=2019/4/28&totalprice=" + this.state.total.toString(),{
      method: "post",
      headers: {
        "Accept": "text/html",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    let res = await fetch("http://localhost:8080/OrderManager",{
          method: "get",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
        });
    let result = await res.json();
    let orderid = 0;
    for(let i = 0; i < result.length; i++)
    {
        if(orderid < result[i]["id"])
        {
          orderid = result[i]["id"];
        }
    }
    for(let i = 0; i < this.state.cart.length; i++)
    {
      await fetch("http://localhost:8080/OrderItemManager?orderid=" + orderid.toString() + "&number=" + this.state.cart[i].Number.toString() + "&book=" + this.state.cart[i].Book + "&price=" + this.state.cart[i].Price.toString(), {
        method: "post",
        headers: {
          "Accept": "text/html",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
      });
    }
    await fetch("http://localhost:8080/CartManager?operation=removeall&userid=0&book=null&price=0",{
      method: "post",
      headers: {
        "Accept": "text/html",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    notification.open({
      message: "支付成功",
  });
    this.setState({ cart: [], total: 0 });
  }
  handleSort(index) {
		orderBy = index
		order[index] = !order[index]
		let list = []
		for (let i = 0; i < this.state.cart.length; i++) {
			list.push(this.state.cart[i])
		}
		list.sort(this.sort)
		this.setState({
			cart: list
		})
	}
	sort(a, b) {
		let res = 0;
		if (a[orderBy] < b[orderBy]) {
			res = -1
		} else if (a[orderBy] > b[orderBy]) {
			res = 1
		} else {
			res = 0
		}
		if (!order[orderBy]) {
			res = 0 - res
		}
		return res
	}
  render(){
    return(
      <Paper className="paper">                   
        <Table className="table" class="table2">
            <TableHead>
                <TableRow>
                    <TableCell>
                      <Button className="button" onClick={() => { this.handleSort("Book")}}>书名</Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button className="button" onClick={() => { this.handleSort("Number")}}>数量</Button>
                    </TableCell>
                    <TableCell align="right">
                    <Button className="button" onClick={() => { this.handleSort("Price")}}>价格</Button>
                    </TableCell>
                    <TableCell align="right">
                    <Button className="button" onClick={() => { this.handleSort("TotalPrice")}}>总价</Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
						{this.state.cart.map((item) => {
							return (
								<TableRow>
									<TableCell component="th" scope="row" >
										{item.Book}
									</TableCell>
									<TableCell align="right">
										{item.Number}
									</TableCell>
									<TableCell align="right">
										{item.Price}
									</TableCell>
									<TableCell align="right" >
                    {item.TotalPrice}
                  </TableCell>
                  </TableRow>
						)
          })}
        </TableBody>
        </Table>
        <div className="App">
          <Button type="primary" onClick={this.getCart}>show items</Button>
          <Button type="primary" onClick={this.clearCart}>clear</Button><br/>
        All in total: {this.state.total} <Button type="primary" onClick={this.payBill}>Pay now</Button>  
        </div>
    </Paper>
    );
  }
}

export default ShoppingList;