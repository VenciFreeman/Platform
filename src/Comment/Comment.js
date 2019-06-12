import React from "react";

import DisplaytoUI from "./DisplaytoUI";
import WriteComment from "./WriteComment";

class LiuYanapp extends React.Component {
  constructor(props) {
    super(props);
    this.ids = 1;
    this.state = {
      todos: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(id) {
    let newtodos = this.state.todos.filter(item => {
      return !(item.id == id);
    });
    this.setState({
      todos: newtodos
    });
  }

  addItem(value) {
    this.state.todos.unshift({
      id: this.ids++,
      text: value,
      time: new Date().toLocaleString(),
      done: 0
    });
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="panel panel-default">
          <div className="panel-headingbg-danger">
            <hr />
          </div>
          <div className="panel-body">
            <h1 className="text-center ">
              软件工程：实践者的研究方法（第7版）
            </h1>
            <h2 className="text-center "> ¥20</h2>
            <DisplaytoUI deleteItem={this.deleteItem} data={this.state.todos} />
            <WriteComment addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default LiuYanapp;
