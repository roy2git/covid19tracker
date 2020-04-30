import React from "react";
import Summary from "./Summary";
export default function Header() {
  let imgUrl = "/images/covid.jpg";

  return (
    <div class="jumbotron ">
      <div
        class="container"
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
        }}
      >
        <h1 class="display-6 text-center">Covid-19 World Live Stats</h1>
        <p class="lead text-center">
          <image src="imgUrl"></image>
        </p>
        <Summary></Summary>
      </div>
    </div>
  );
}
