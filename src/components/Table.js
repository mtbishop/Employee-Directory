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

  render() {
    return (
      <div className="container">
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
