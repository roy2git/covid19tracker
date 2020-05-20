import React from "react";
import Summary from "./Summary";
import logo from "../images/covid.png";
export default function Header() {
  //  const imgUrl = "/images/covid.png";

  return (
    <div
      className="jumbotron "
      style={{
        background: "url(" + logo + ")",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
