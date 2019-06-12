import React from "react";

class DeleteComment extends React.Component {
  delete() {
    this.props.deleteItem(this.props.data.id);
  }
  render() {
    let { text, time, done, id } = this.props.data;

    return (
      <tr>
        <td>
          {text}
          <br />
          <br />
          {time}
        </td>
        <td>
          <a
            className="btn glyphicon glyphicon-remove btn-danger"
            onClick={this.delete.bind(this)}
          >
            删除留言
          </a>
        </td>
      </tr>
    );
  }
}
export default DeleteComment;
