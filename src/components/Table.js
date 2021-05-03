import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import './TableCSS.css';
import Rows from './Rows';

export default class Table extends Component {
  state = {
    employeeArr: [],
    location: '',
  };

  APICallWasSuccessful() {
    API.getEmployees().then(({ d }) => {
      this.setState({ employeeArr: d.results });
    });
  }

  clearFilters = (e) => {
      e.preventDefault();
      API.getEmployees().then(({ d }) => {
        this.setState({ employeeArr: d.results });
      });
  };

  render() {
    return (
      <div className="container">
        <form className="form form-inline">
          <div id="locationFilter" className="form-group">
              <label className="mr-3">Filter by Location:</label>
              <input type="text" className="form-control mr-1" placeholder="Enter State Here"></input>
            <button className="btn btn-primary" onClick={this.clearFilters}>
              Clear Filters
            </button>
          </div>
        </form>
        <tbody>
          {this.state.employeeArr.map((emp, i) => (
            <Rows
              key={i}
              firstName={emp.name.first}
              lastName={emp.name.last}
              email={emp.email}
              phone={emp.phone}
              location={emp.location.state}
              image={emp.picture.small}
            />
          ))}
        </tbody>
      </div>
    );
  }
}
