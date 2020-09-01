import React, { useContext, useEffect, useState } from "react";
import { SuperContext } from "../context/context";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
export const CountryList = () => {
  const [cname, setcname] = useState("");
  const context = useContext(SuperContext);
  const { loading, data, err } = context;
const onchange=(event)=>{
  setcname(event.target.value)
}

function search() {
    context.search(cname);
  }
  useEffect(() => {
    if (cname === "") {
      context.fetch();
    }
  }, []);

  console.log(context);
  const style = { textDecoration: "none", color: "black" };
  if (loading) {
    return "loading";
  } else if (data) {
    return (
      <div className="container mt-5">
        <button onClick={()=>console.log(cname)}>click</button>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyPress={search}
            onChange={onchange}
            value={cname}
            name="name"
          />
        </form>
        <div className="row mt-5">
          {data.map((country, i) => {
            return (
              <div className="col-lg-3 col-6 mb-3" key={i}>
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
  } else if (err !== "") {
    return "errror";
  }
};
