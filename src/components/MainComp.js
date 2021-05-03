import React from 'react';
import Header from './Header';
import RowsForColumns from './Rows';
import Table from './Table';
import './MainComp.css';


function MainComp() {
  return (
    <div className="fullBody">
      <Header />
      <RowsForColumns />
      <Table />
    </div>
  );
}
export default MainComp;
