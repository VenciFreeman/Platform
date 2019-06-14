import React from "react";

import Iinterface from "./DeleteComment";
class CommentController extends React.Component {
  render() {
    let todos = this.props.data;

    let todoItems = todos.map(item => {
      return (
        <Iinterface
          deleteItem={this.props.deleteItem}
          key={item.id}
          data={item}
        />
      );
    });

    return (
      <table className="table table-striped">
        <h1 />
        <thead>
          <tr />
        </thead>
        <tbody>{todoItems}</tbody>
      </table>
    );
  }
}

export default CommentController;
