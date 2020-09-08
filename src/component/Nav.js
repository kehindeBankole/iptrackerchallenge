import React , {useContext , useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "./globe.jpg";
import {SuperContext} from '../context/context'

export const Nav = () => {
  const context = useContext(SuperContext)
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand ml-3" to="/">
          <img src={logo} alt="logo" width="80" height="80" />
        </Link>
        <form className="form-inline">
          <label className="switch">
            <input
              type="checkbox"
              onChange={()=>context.godark()}
            />
            <span className="slider round"></span>
          </label>
        </form>
      </nav>
    </div>
  );
};
