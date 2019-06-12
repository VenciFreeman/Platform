import React, { Component } from "react";
import { Input } from "antd";
import { Button } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./App.css";


let order = {
  name: true,
  author: true,
  price: true,
  isbn: true,
  stock: true,
}
let orderBy = 'name'
class Catalog extends Component{
  constructor(props){
    super(props);
    this.state = {
      filterDropdownVisible: false,
      data: [],
      datacopy:[],
      searchText: "",
			filtered: false,
    };
  }

  onList = async (e) => {
    let res = await fetch("http://localhost:8080/Booklist",{
      method: "get",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    let result = await res.json();
    let booklist = [];
    
    for(let i = 0; i < result.length; i++)
    {
      booklist.push({ Cover: result[i]["cover"],Book: result[i]["bookname"], Author: result[i]["author"], Isbn: result[i]["isbn"], Stock: result[i]["stock"], Price: result[i]["price"], BookIndex: result[i]["id"] });
    }
    this.setState({ data : booklist ,datacopy : booklist});
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
  handleChange() {
		let pattern = document.getElementById('filter').value
		let list = this.state.datacopy.filter((item) => {
			return item.Book.indexOf(pattern) !== -1
		})
		this.setState({
			data: list
		})
	}
  onShowDetail = async (e) => {
    e.persist();
    let res = await fetch("http://localhost:8080/Booklist",{
      method: "get",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    });
    let result = await res.json();
    let book = {};
    for(let i = 0; i < result.length; i++)
    {
        if(e.target.getAttribute("Bookid") == result[i]["id"])
        {
            book = {Cover: result[i]["cover"], Book: result[i]["bookname"], Author: result[i]["author"],Isbn: result[i]["isbn"], Stock: result[i]["stock"], Price: result[i]["price"], BookIndex: result[i]["id"] };
        }
    }
    this.props.history.push("/bookpage");
    this.props.showDetail(book);
  }

  render() {
    return (
      <Paper className="paper">
      <Paper id="search"><Input label="搜索框" id="filter" onChange={() => this.handleChange()}/></Paper>
      <Table className="table" class="table" >
					<TableHead>
						<TableRow>
							<TableCell>
								<Button className="button" onClick={() => { this.handleSort("Book")}}>书名</Button>
							</TableCell>
							<TableCell align="right">
								<Button className="button" onClick={() => { this.handleSort("Author")}}>作者</Button>
							</TableCell>
							<TableCell align="right">
								<Button className="button" onClick={() => { this.handleSort("Price")}}>价格</Button>
							</TableCell>
							<TableCell align="right">
								<Button className="button" onClick={() => { this.handleSort("Isbn")}}>isbn</Button>
							</TableCell>
							<TableCell align="right">
								<Button className="button" onClick={() => { this.handleSort("Stock")}}>库存</Button>
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
										{item.Author}
									</TableCell>
									<TableCell align="right">
										{item.Price}
									</TableCell>
									<TableCell align="right">
										{item.Isbn}
									</TableCell>
									<TableCell align="right" >
                    {item.Stock}
                  </TableCell>
                  <TableCell align="right" >
                  <Button className="button" bookid={item.BookIndex} onClick={ this.onShowDetail }>查看详情</Button>
                  </TableCell>
                  </TableRow>
							)
						})}
					</TableBody>
				</Table> 
      <div className="App">
        <Button type="primary" onClick={this.onList}>get book</Button>
      </div>
      </Paper>
    );
  }
}

export default withRouter(Catalog);