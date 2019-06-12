import React, { Component } from 'react';
import "./App.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'semantic-ui-react'


let order = {
    name: true,
    author: true,
    price: true,
    isbn: true,
    stock: true,
  }
let orderBy = 'name'
class ItemPage extends Component{
    constructor(props){
        super(props);
        this.state = { orderid: this.props.order, data: [] };
    }
    showItems = async() => {
        let res = await fetch("http://localhost:8080/OrderItemManager?orderid=" + this.state.orderid.toString(), {
            method: "get",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
        });
        let result = await res.json();
        let itemlist = [];
        for(let i = 0; i < result.length; i++)
        {
            itemlist.push({ Orderid: result[i]["orderid"], Book: result[i]["book"], Price: result[i]["price"], Number: result[i]["number"] });
        }
        this.setState({ data : itemlist,datacopy:itemlist });
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
      handleSort(index) {
        orderBy = index
        order[index] = !order[index]
        let list = []
        for (let i = 0; i < this.state.data.length; i++) {
          list.push(this.state.data[i])
        }
        list.sort(this.sort)
        this.setState({
          data: list
        })
      }
      handleChange() {
        let pattern = document.getElementById('filter').value
        let list = this.state.datacopy.filter((item) => {
          return item.Book.indexOf(pattern) !== -1
        })
        this.setState({
          data: list
        })
      }
    render(){
        return(
          <Paper className="paper">                   
            <Table className="table" class="table3">
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
                        <Button className="button" onClick={() => { this.handleSort("Orderid")}}>订单号</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.data.map((item) => {
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
                                    {item.Orderid}
                                </TableCell>
                      </TableRow>
                )
              })}
            </TableBody>
            </Table>
            <div className="App">
                <Button type="primary" onClick={ this.showItems }>refresh</Button>
            </div>
        </Paper>
        );
      }
    }

export default ItemPage;