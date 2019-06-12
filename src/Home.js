import React, { Component } from "react";
import { Layout, Carousel } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import "./App.css";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Catalog from "./Catalog";
import ShoppingList from "./Shoppinglist";
import BookPage from "./Book";
import OrderPage from "./Order";
import ItemPage from "./OrderItem";
import Commentfunct from "./Comment/Comment";

const { Content } = Layout;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookToDisplay: {},
      orderToDisplay: 0,
      currentUserId: this.props.userid
    };
  }
  jumpToDetail = book => {
    this.setState({ bookToDisplay: book });
  };
  showOrderItems = orderid => {
    this.setState({ orderToDisplay: orderid });
  };

  Logout = () => {
    alert("安全退出");
    this.props.history.push("/Login");
  };
  render() {
    return (
      <Router>
        <div>
          <Paper>
            <Link to="/Home">
              <Button>主页</Button>
            </Link>
            <Link to="/catalog">
              <Button>书籍浏览</Button>
            </Link>
            <Link to="/mycart">
              <Button>购物车</Button>
            </Link>
            <Link to="/order">
              <Button>订单管理</Button>
            </Link>
            <Link to="/comment">
              <Button>問答</Button>
            </Link>
            <Button onClick={this.Logout}>注销</Button>
          </Paper>
          <Content>
            <Route
              path="/Home"
              render={() => (
                <Carousel autoplay class="slick-slide">
                  <h1> Welcome to bookstore!</h1>
                </Carousel>
              )}
            />

            <Route
              path="/catalog"
              render={() => <Catalog showDetail={this.jumpToDetail} />}
            />
            <Route
              path="/comment"
              render={() => <Commentfunct showDetail={this.jumpToDetail} />}
            />
            <Route
              path="/mycart"
              render={() => <ShoppingList uID={this.state.currentUserId} />}
            />
            <Route
              path="/bookpage"
              render={() => <BookPage book={this.state.bookToDisplay} />}
            />
            <Route
              path="/order"
              render={() => (
                <OrderPage
                  showDetail={this.showOrderItems}
                  judge={this.state.currentUserId}
                />
              )}
            />
            <Route
              path="/orderitempage"
              render={() => <ItemPage order={this.state.orderToDisplay} />}
            />
          </Content>
        </div>
      </Router>
    );
  }
}

export default withRouter(HomePage);
