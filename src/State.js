import React, { Component } from "react";

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      company_name: "BL1216",
      address: "Vizag",
      employee: [
        { name: "Lucky", age: 18, dept: "Sales" },
        { name: "Kumar", age: 22, dept: "Manager" },
        { name: "Chinnu", age: 20, dept: "Production" }
      ]
    };
  }
  render() {
    return (
      <>
        <h2>Company Name: - {this.state.company_name}</h2>
        <h3>Address: - {this.state.address}</h3>
        <table border="1" width="50%">
          <tr>
            <th>S.NO</th>
            <th>EMPLOYEE NAME</th>
            <th>AGE</th>
            <th>DEPARTMENT</th>
          </tr>
          {this.state.employee.map(function(data, index) {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.dept}</td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

export default Sample;
