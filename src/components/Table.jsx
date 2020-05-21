import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleSearch = (e) => {
    let searchText = e.target.value;
    console.log(searchText);
    this.setState({ searchText });
  };

  handleSort = () => {};
  render() {
    if (!this.props.data) {
      return <div>****** loading ********</div>;
    }

    console.log(this.props);

    let dateUTC = this.props.data.lastUpdatedDate;
    // console.log(dateUTC);

    var dateIST = new Date(dateUTC);
    //console.log(dateIST);

    let searchBar = (
      <nav className="navbar bg-light">
        <span style={{ color: "green" }}>
          * Last Updated On {dateIST.toString()}
        </span>

        <form>
          <input
            onChange={(e) => this.handleSearch(e)}
            className="form-control"
            type="search"
            placeholder="Search By Country"
            aria-label="Search"
          />
        </form>
      </nav>
    );

    let filteredList = this.props.data.countryList.filter(
      (c) =>
        c.Country.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !==
        -1
    );

    let countrytable = (
      <div>
        {searchBar}

        <table className="table table-hover ">
          <thead>
            <tr>
              <th className="table-light">Country</th>
              <th className="table-primary">New Confirmed</th>
              <th className="table-primary">Total Confirmed</th>
              <th className="table-danger">New Deaths</th>
              <th className="table-danger">Total Deaths</th>
              <th className="table-success">New Recovered</th>
              <th className="table-success">Total Recovered</th>
            </tr>
          </thead>

          <tbody>
            {filteredList.map((country) => (
              <tr key={country.CountryCode}>
                <th>{country.Country}</th>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.NewDeaths}</td>
                <td>{country.TotalDeaths}</td>
                <td>{country.NewRecovered}</td>
                <td>{country.TotalRecovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    return countrytable;
  }
}
