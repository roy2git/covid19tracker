import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Summary from "./components/Summary";
import Youtube from "./components/Youtube";
import Table from "./components/Table";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
let count = 1;
class App extends Component {
  state = { total: {}, countryList: [], lastUpdatedDate: null };

  componentDidMount() {
    console.log("count is ----------->" + count++);
    let promise = axios.get("https://api.covid19api.com/summary");
    promise
      .then((response) => {
        this.setState({
          countryList: response.data.Countries,
          total: response.data.Global,
          lastUpdatedDate: response.data.Date,
        });
      })
      .catch((error) => console.log("error------------->" + error));
  }

  render() {
    return (
      <div>
        <Header />
        <Summary data={this.state.total}></Summary>
        <Table data={this.state}></Table>
        <hr />
        <Youtube></Youtube>
        <hr />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
