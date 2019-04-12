import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';



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

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: data
        };
    }
    render() {
        return (
            <Paper className="paper">
					<Paper id="top_right">
                    <Link to="/BookList" ><Button>返回</Button></Link>
					</Paper><br/>                
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell >书名</TableCell>
                            <TableCell align="right">作者</TableCell>
                            <TableCell align="right">价格</TableCell>
                            <TableCell align="right">isbn</TableCell>
                            <TableCell align="right">库存</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.books.map((item, index) => {
                            if (index == this.props.match.params.id) {
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
                                    </TableRow>
                                )
                            }

                        })}
                    </TableBody>
                </Table>
                <img
                    src={require( "" + this.state.books[this.props.match.params.id].img)}
                    alt={this.state.books[this.props.match.params.id].name}
                    width="320" height="480"
                />
            </Paper>
        );
    }
}

export default Book;
