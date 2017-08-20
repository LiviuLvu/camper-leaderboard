import React from 'react';

export default class UserRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{ this.props.count }</td>
        <td> <img src={this.props.img} alt="user icon"/>
          { this.props.name }</td>
        <td>{ this.props.last30 }</td>
        <td>{ this.props.allTime }</td>
      </tr>
    );
  }
}