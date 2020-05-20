import React from "react";

export default function Footer() {
  return (
    <div className="text-center">
      <h5>
        Covid Data retrireved from API
        <a href="https://api.covid19api.com/" target="_blank">
          <span style={{ paddingLeft: "5px" }}>
            https://api.covid19api.com/
          </span>
        </a>
      </h5>
    </div>
  );
}
