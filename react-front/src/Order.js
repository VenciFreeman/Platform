import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
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
class OrderPage extends Component{
    constructor(props){
        super(props);
        this.state = {
          filterDropdownVisible: false,
          data: [],
          searchText: "",
          filtered: false,
          customid:this.props.judge,
        };
    }
    getOrder = async (e) => {
        let res = await fetch("http://localhost:8080/OrderManager",{
          method: "get",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
        });
        let result = await res.json();
        let orderlist = [];
        for(let i = 0; i < result.length; i++)
        { 
          
          orderlist.push({ Id: result[i]["id"], User: result[i]["user"], Date: result[i]["date"], TotalPrice: result[i]["totalPrice"], OrderIndex: result[i]["id"]});
        } 
        this.setState({ data : orderlist });
    }
    onShowItems = async (e) => {
        e.persist();
        let orderid = e.target.getAttribute("orderid");
        this.props.history.push("/orderitempage");
        this.props.showDetail(orderid);
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
    

    render(){
        return(
          <Paper className="paper">                   
            <Table className="table" class="table2">
                <TableHead>
                    <TableRow>
                        <TableCell>
                          <Button className="button" onClick={() => { this.handleSort("Id")}}>订单号</Button>
                        </TableCell>
                        <TableCell align="right">
                          <Button className="button" onClick={() => { this.handleSort("Date")}}>日期</Button>
                        </TableCell>
                        <TableCell align="right">
                        <Button className="button" onClick={() => { this.handleSort("TotalPrice")}}>总价格</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.state.data.map((item) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row" >
                        {item.Id}
                      </TableCell>
                      <TableCell align="right">
                        {item.Date}
                      </TableCell>
                      <TableCell align="right">
                        {item.TotalPrice}
                      </TableCell>
                      <TableCell align="right" >
                        <Button className="button" orderid={item.OrderIndex} onClick={ this.onShowItems }>查看详情</Button>
                      </TableCell>
                      </TableRow>
                )
              })}
            </TableBody>
            </Table>
            <div className="App">
              <Button type="primary" onClick={this.getOrder}>get orders</Button>
            </div>
        </Paper>
          );
    }
}

export default withRouter(OrderPage);