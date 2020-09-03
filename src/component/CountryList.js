import React, { useContext, useEffect, useState } from "react";
import { SuperContext } from "../context/context";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
export const CountryList = () => {
  const [cname, setcname] = useState("");
  const context = useContext(SuperContext);
  const { loading, data, err } = context;
  const onchange = (event) => {
    setcname(event.target.value);
  };

  function search() {
    context.search();
  }
  useEffect(() => {
    context.fetch();
  }, []);
  const style = { textDecoration: "none", color: "black" };
  if (loading) {
    return "loading";
  } else if (data) {
    return (
      <div className="container mt-5">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyUp={() => search()}
            onChange={onchange}
            value={cname}
            name="name"
            id="myInput"
          />
        </form>
        <div className="row mt-5" id="parent">
          {data.map((country, i) => {
            return (
              <div className="col-lg-3 col-6 mb-3" key={i} id="childcon">
                <p>
                  <Link to={`/country/${country.name}`} style={style}>
                    <CountryCard
                      src={country.flag}
                      name={country.name}
                      population={country.population.toLocaleString()}
                      region={country.region}
                      capital={country.capital}
                    />
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
