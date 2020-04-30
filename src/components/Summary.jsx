import React from "react";
import { Card } from "bootstrap/dist/css/bootstrap.min.css";

export default function Summary(props) {
  console.log("propssssssssssssssssssss========" + props);
  return (
    <div>
      <span className="badge badge-primary badge-pill">14</span>
      <div className="card-deck">
        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">TotalConfirmed</div>
          <div className="card-body text-dark">
            <p className="card-text">{this.props.total.TotalConfirmed}</p>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">TotalDeaths</div>
          <div className="card-body text-dark">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
              3325353
            </p>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">TotalRecovered</div>
          <div className="card-body text-dark">
            <h5 className="card-title">Dark card title</h5>
            <p className="card-text">
             354536
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
