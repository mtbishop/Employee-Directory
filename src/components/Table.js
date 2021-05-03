import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import './TableCSS.css';
import Rows from './Rows';
import axios from 'axios';

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

  filterAlphabetically = () => {
    const filtered = this.state.employeeArr.sort((f, l) =>
      f.name.last > l.name.last ? 1 : l.name.last > f.name.last ? -1 : 0
    );
    this.setState({ employeeArr: filtered });
  };

  render() {
    return (
      <div className="container">
        <form id="filterForm" className="form-inline">
          <div className="form-group mb-2">
            <button
              className="btn btn-primary"
              onClick={this.filterAlphabetically}
            >
              Sort Alphabetically
            </button>
            <button
              id="clearFilters"
              type="submit"
              className="btn btn-primary"
              onClick={this.clearFilters}
            >
              Clear Filters
            </button>
          </div>
          <div id="locationFilter" className="form-group mb-2">
            <label className="mr-3">Filter by Location:</label>
            <input
              type="text"
              className="form-control mr-1"
              placeholder="Enter State Here"
            ></input>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.filterAlphabetically}
            >
              Search
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
