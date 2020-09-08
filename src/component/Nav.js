import React , {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "./globe.jpg";
import {SuperContext} from '../context/context'

export const Nav = () => {
  const context = useContext(SuperContext)
  function change(){
    context.godark()
    console.log(context.darkclick)
  }

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
              onChange={change}
            />
            <span className="slider round"></span>
          </label>
        </form>
      </nav>
    </div>
  );
};
