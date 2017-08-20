import React from 'react';
import { render } from 'react-dom';

// import components here
import Table from './components/Table';

import './styles/reset.css';
import './styles/index.css';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <div className="header">
          <h2>Camper Leaderboard</h2>
        </div>
        <Table></Table>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('root'));
