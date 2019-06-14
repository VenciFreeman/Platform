import React from "react";

class Iinterface extends React.Component {
  delete() {
    this.props.deleteItem(this.props.data.id);
  }
  render() {
    let { text, time, id } = this.props.data;

    return (
      <tr>
        <td>
          {text}
          <br />
          <br />
          {time}
        </td>
        <td>
          <a onClick={this.delete.bind(this)}>删除留言</a>
        </td>
      </tr>
    );
  }
}
export default Iinterface;
