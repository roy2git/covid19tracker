import React from "react";

export default function Summary(props) {
  console.log(props.data);

  //required to avoid undefined in the first rendering of this component
  if (!props.data) {
    return null;
  }

  return (
    <div>
      <div className="card-deck">
        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">New Confirmed</div>
          <div className="card-body text-dark">
            <span className=" badge-primary badge-pill">
              {props.data.NewConfirmed}
            </span>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">Total Confirmed</div>
          <div className="card-body text-dark">
            <span className=" badge-primary badge-pill">
              {props.data.TotalConfirmed}
            </span>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">New Deaths</div>
          <div className="card-body text-dark">
            <span className=" badge-danger badge-pill">
              {props.data.NewDeaths}
            </span>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">Total Deaths</div>
          <div className="card-body text-dark">
            <span className=" badge-danger badge-pill">
              {props.data.TotalDeaths}
            </span>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">NewRecovered</div>
          <div className="card-body text-dark">
            <span className=" badge-success badge-pill">
              {props.data.NewRecovered}
            </span>
          </div>
        </div>

        <div className="card border-dark mb-3" style={{ maxWidth: "33rem" }}>
          <div className="card-header">Total Recovered</div>
          <div className="card-body text-dark">
            <span className=" badge-success badge-pill">
              {props.data.TotalRecovered}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
