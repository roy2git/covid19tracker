import React from "react";

export default function Search() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="dfdf">
        Navbar
      </a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Country"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
