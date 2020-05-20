import React from "react";

class Search extends React.Component {
  handleSearch = (e) => {
    let searchText = e.target.value;
    console.log(searchText);

    let allCountries = this.props.data.countryList;
    let filteredList = allCountries.filter(
      (country) => country.Country == searchText
    );
    this.setState({ personList: filteredList });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <p>Data Last Updated On</p>
        <form className="form-inline">
          <input
            onChange={(e) => this.handleSearch(e)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Country"
            aria-label="Search"
          />
        </form>
      </nav>
    );
  }
}
export default Search;
