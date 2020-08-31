import React, { useEffect } from "react";


function User(props) {

  return (
    <div className="container py-5 px-3 details">
      <div className="row">
        <div className="col">{props.ip}</div>
        <div className="col">{props.location}</div>
        <div className="col">{props.timezone}</div>
        <div className="col" id="last">{props.isp}</div>
      </div>
    </div>
  );
}

export default User;
