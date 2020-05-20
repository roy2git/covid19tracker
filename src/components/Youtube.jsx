import React from "react";

export default function Youtube() {
  return (
    <div className="col-sm-6 container">
      <h4 className="text-center">World Live Stats </h4>
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          title="tv"
          className="embed-responsive-item"
          src="//www.youtube.com/embed/OA0gFcwlkCI"
        ></iframe>
      </div>
    </div>
  );
}
