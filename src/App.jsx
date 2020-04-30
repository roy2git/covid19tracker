import ReactDOM from "react-dom";
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

class App extends Component {
  // constructor() {
  //   super();
  // }
  state = { total: {}, countryList: [], lastUpdatedDate: null };

  componentDidMount() {
    let promise = axios.get("http://api.covid19api.com/summary");
    promise
      .then((response) => {
        console.log("promisepromisepromisepromise===>" + response.data);
        this.setState({ countryList: response.data.Countries });
        this.setState({ total: response.data.Global });
        this.setState({ lastUpdatedDate: response.data.Date });
      })
      .catch((error) => console.log("error------------->" + error));
  }

  render() {
    return (
      <div>
        <Header data={this.state}></Header>
        <Summary data={this.state}></Summary>

        <Search></Search>
        {/* <Table></Table> */}
        <Youtube></Youtube>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
