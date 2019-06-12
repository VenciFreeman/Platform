import React from "react";

import DeleteComment from "./DeleteComment";
class DisplaytoUI extends React.Component {
  render() {
    let todos = this.props.data;

    let todoItems = todos.map(item => {
      return (
        <DeleteComment
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

export default DisplaytoUI;
