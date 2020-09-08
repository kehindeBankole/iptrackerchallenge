import React, { useContext } from "react";
import { SuperContext } from "../context/context";
const CountryCard = (props) => {
  const { src, name, population, region, capital } = props;
  const context = useContext(SuperContext);
  return (
    <div>
      <div
        className="card"
        style={{
          background: !context.darkclick
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 100%)",
        }}
      >
        <img src={src} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div
            className="card-text"
            style={{
              color: !context.darkclick
                ? "hsl(0, 0%, 100%)"
                : "hsl(200, 15%, 8%)",
            }}
          >
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
