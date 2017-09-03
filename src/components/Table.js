import React from 'react';

import UserRow from './UserRow';
import axios from 'axios';


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      sortOption: 'last30'
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

  changeUrl(url, sortOption) {
    this.setState({
      url: url,
      sortOption: sortOption
    });
  }

  render () {
    const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'; 
    const alltimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'; 

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
            <th 
              className={this.state.sortOption === 'last30' ? 'sort-list active' : 'sort-list inactive'}
              onClick={() => this.changeUrl(recentUrl, 'last30')}>
                Points in past 30 days
            </th>

            <th 
              className={this.state.sortOption === 'alltime' ? 'sort-list active' : 'sort-list inactive'}
              onClick={() => this.changeUrl(alltimeUrl, 'alltime')}>
                All time points
            </th>
          </tr>
        </thead>
        <tbody>
          {rowElements}
        </tbody>
      </table>
    );
  }
}
