import React, { Component } from 'react';
import {Input } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
require('./style1.css');


const data = [
    {
      name:'Dragon Raja', 
      author:'Jiang Nan', 
      price:60, 
      isbn:'‎978-3-16-148410-0', 
      stock:5, 
      img:'./img/1.jpg'
    },
    {
      name:'Wandering Earth', 
      author:'Liu Cixin', 
      price:50, 
      isbn:'‎178-3-16-148410-0', 
      stock:9, 
      img:'./img/2.jpg'
    },
    {
      name:'The Three-Body Problem', 
      author:'Liu Cixin', 
      price:40, 
      isbn:'‎278-3-16-148410-0', 
      stock:7, 
      img:'./img/tb.jpg'
    },
  ];
class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {
            books: data,
            bookcopy:data
		};
	}
	handleLink(index) {
		return "/detail/" + index
	}
	sortName = () => {
        const newList = this.state.books.sort((p, n) => (p.name.localeCompare(n.name)));
        this.setState({ books: newList });
    }
    
    sortPrice = () => {
        const newList = this.state.books.sort((p, n) => (p.price - n.price));
        this.setState({books: newList});
    }
    sortAuthor = () => {
        const newList = this.state.books.sort((p, n) => (p.author - n.author));
        this.setState({books: newList});
    }
    sortIsbn = () => {
        const newList = this.state.books.sort((p, n) => (p.isbn - n.isbn));
        this.setState({books: newList});
    }
    sortStock = () => {
        const newList = this.state.books.sort((p, n) => (p.stock - n.stock));
        this.setState({books: newList});
    }
	handleChange() {
		let pattern = document.getElementById('filter').value
		let list = this.state.bookcopy.filter((item) => {
			return item.name.indexOf(pattern) !== -1
		})
		this.setState({
			books: list
		})
	}
	render() {
		return (
			<Paper className="paper">
					<Paper id="top_right">
				    <Link to="/Home" ><Button>好书强推</Button></Link>|
                    <Link to="/Manage" ><Button>订单管理</Button></Link>|
                    <Link to="/BookList" ><Button>书籍浏览</Button></Link>|
                    <Link to="/" ><Button>注销</Button></Link>
					</Paper><br/>
				<Paper id="search"><Input label="搜索框" id="filter" onChange={() => this.handleChange()}/></Paper>
				<Table className="table" class="table">
					<TableHead>
						<TableRow>
							<TableCell>
								<Button onClick={this.sortName}>书名</Button>
							</TableCell>
							<TableCell align="right">
								<Button onClick={this.sortAuthor}>作者</Button>
							</TableCell>
							<TableCell align="right">
								<Button onClick={this.sortPrice}>价格</Button>
							</TableCell>
							<TableCell align="right">
								<Button onClick={this.sortIsbn}>isbn</Button>
							</TableCell>
							<TableCell align="right">
								<Button onClick={this.sortStock}>库存</Button>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.books.map((item, index) => {
							return (
								<TableRow key={index} >
									<TableCell component="th" scope="row" >
										{item.name}
									</TableCell>
									<TableCell align="right">
										{item.author}
									</TableCell>
									<TableCell align="right">
										{item.price}
									</TableCell>
									<TableCell align="right">
										{item.isbn}
									</TableCell>
									<TableCell align="right" >
										{item.stock}
									</TableCell>
									<TableCell align="right" >
										<Link to={this.handleLink(index)}>查看详情</Link>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default BookList;