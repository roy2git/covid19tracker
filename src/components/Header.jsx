import React from "react";
import Summary from "./Summary";

export default function Header() {
  const imgUrl = "/images/covid.png";

  return (
    <div
      className="jumbotron "
      style={{
        background: "url(" + imgUrl + ")",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    ></div>
  );
}
