import React from "react";
const CountryCard = (props) => {
  const { src, name, population, region, capital } = props;
  return (
    <div>
      <div className="card">
        <img src={src} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="card-text">
            <b>{name}</b>
            <div className="mt-3">
            <p>population : {population}</p>
            <p>region : {region}</p>
            <p>capital : {capital}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
