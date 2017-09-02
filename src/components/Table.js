import React from 'react';

import UserRow from './UserRow';
import axios from 'axios';


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    }
  }

  getTheData() {
    axios.get(this.state.url)
    .then((response) => {
      this.setState({
        rowData: response.data
      });
    })
    .catch((error) => alert(error));
  }

  changeUrl(url) {
    this.setState({url: url});
  }

  componentDidMount() {
    
  }
  
  render () {
    this.getTheData();
    let rowElements = [];

    this.state.rowData.map((item, i) => {
      return rowElements.push( <UserRow key={item.username} count={i+1} img={item.img} name={item.username} last30={item.recent} allTime={item.alltime}></UserRow> );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Camper Name</th>
            <th className="sort-list" 
              onClick={() => this.changeUrl('https://fcctop100.herokuapp.com/api/fccusers/top/recent')}>
              Points in past 30 days</th>
            <th className="sort-list" 
              onClick={() => this.changeUrl('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')}>
              All time points</th>
          </tr>
        </thead>
        <tbody>
          {rowElements}
        </tbody>
      </table>
    );
  }
}
