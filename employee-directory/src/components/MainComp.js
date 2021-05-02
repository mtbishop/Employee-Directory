import React from 'react';
import Header from './Header';
import Searching from './Searching';
import RowsEnColumns from './RowsEnColumns';
import './MainComp.css';


function MainComp() {
  return (
    <div className="fullBody">
      <Header />
      <Searching />
      <RowsEnColumns />
    </div>
  );
}
export default MainComp;
