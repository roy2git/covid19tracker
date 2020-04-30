import React, { Component } from "react";

export default class Table extends Component {
  handleDelete(person) {
    let filteredList = this.state.personList.filter((p) => p.id !== person.id);
    this.setState({ personList: filteredList });
  }

  render() {
    console.log(this.state.personList);
    this.state.personList.map((p) => console.log(p));
    let msg = (
      <span style={{ marginLeft: "30%" }}>
        Total No of persons {this.state.personList.length}
      </span>
    );
    if (this.state.personList.length === 0) {
      return msg;
    }

    let persontable = (
      <div>
        {msg}
        <table className="personTable">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Country</td>
              <td>Delete</td>
            </tr>
          </thead>
          {this.state.personList.map((person) => (
            <tr>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.country}</td>
              <td>
                <button onClick={() => this.handleDelete(person)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
       
      </div>
    );

    return persontable;
  }
}
