import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import './TableCSS.css';
import Rows from './Rows';

export default class Table extends Component {
  state = {
    employeeArr: [],
    backupArr: [],
    location: '',
    toggle: true,
  };

  componentDidMount() {
    API.getEmployees().then(({ data }) => {
      this.setState({ employeeArr: data.results });
      this.setState({ backupArr: data.results });
    });
  }

  clearFilters = (e) => {
    e.preventDefault();
    console.log(this.state.employeeArr);
    // API.getEmployees().then(({ data }) => {
    this.setState({ employeeArr: this.state.backupArr });
    // });
  };

  filterAlphabetically = (e) => {
    e.preventDefault();
    const filtered = [...this.state.employeeArr].sort((f, l) =>
      f.name.last > l.name.last
        ? this.state.toggle
          ? 1
          : -1
        : l.name.last > f.name.last
        ? this.state.toggle
          ? -1
          : 1
        : 0
    );
    this.setState({ employeeArr: filtered, toggle: !this.state.toggle });
  };

  filterByState = (location) => (employee) => {
    const loc = employee.location.state;
    return loc.toLowerCase() === location.toLowerCase();
  };

  onChangeProp = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  renderUserFilter = (e) => {
    console.log(e);
    e.preventDefault();
    const input = this.state.location;
    const matches = this.state.employeeArr.filter((emp) =>
      this.filterByState(input)(emp)
    );
    this.setState({ employeeArr: matches, location: '' });
  };

  render() {
    return (
      <>
        <div className="container">
          <form
            id="filterForm"
            className="form-inline"
            // onSubmit={this.renderUserFilter}
          >
            <div className="form-group my-2">
              <button
                className="btn btn-primary"
                onClick={this.filterAlphabetically}
              >
                ↑ Alphabetical Order ↓
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
            <div id="locationFilter" className="form-group my-2">
              <label className="mr-3">Filter by Location:</label>
              <input
                type="text"
                className="form-contol mr-1"
                placeholder="Enter State Here"
                value={this.state.location}
                onChange={this.onChangeProp}
                name="location"
                aria-label="location"
                aria-describedby="searchState"
              ></input>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.renderUserFilter}
                id="searchState"
              >
                Search
              </button>
            </div>
          </form>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <p> </p>
                  </th>
                  <th>
                    <h4>First</h4>
                  </th>
                  <th>
                    <h4>Last</h4>
                  </th>
                  <th>
                    <h4>Email</h4>
                  </th>
                  <th>
                    <h4>Phone</h4>
                  </th>
                  <th>
                    <h4>State</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeArr.map((employee, i) => (
                  <Rows
                    key={i}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    email={employee.email}
                    phone={employee.phone}
                    location={employee.location.state}
                    image={employee.picture.large}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
