import React, { useContext, useEffect, useState } from "react";
import { SuperContext } from "../context/context";
import CountryCard from "./CountryCard";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CountryList = () => {
  const [cname, setcname] = useState("");
  const [region] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const context = useContext(SuperContext);
  const { load, data, err , filter} = context;
  const onchange = (event) => {
    setcname(event.target.value);
  };
  useEffect(() => {
    context.fetch();
  }, []);
  useEffect(() => {
context.search(cname)
  }, [cname, data]);
  const style = { textDecoration: "none", color: "black" };
  if(load)return "loading"
    return (
      <div className="container mt-5">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onchange}
            value={cname}
            name="name"
            id="myInput"
          />
          <div style={{ float: "left" }}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {region.map((d) => (
                  <Dropdown.Item>{d}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </form>
        <div className="row mt-5" id="parent">
          {filter.map((country, i) => {
            return (
              <div
                className="col-lg-3 col-12 col-md-6 mb-3"
                key={i}
                id="childcon"
              >
                <Link to={`/country/${country.name}`} style={style}>
                  <CountryCard
                    src={country.flag}
                    name={country.name}
                    population={country.population.toLocaleString()}
                    region={country.region}
                    capital={country.capital}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
};
