import React from 'react';
import Header from './Header';
import Searching from './Searching';
import RowsForColumns from './Rows';
import Table from './Table';
import './MainComp.css';


function MainComp() {
  return (
    <div className="fullBody">
      <Header />
      <Searching />
      <RowsForColumns />
      <Table />
    </div>
  );
}
export default MainComp;
