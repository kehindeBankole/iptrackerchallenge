import React from "react";
import {Link} from 'react-router-dom'
import logo from './globe.jpg'
export const Nav = () => {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand ml-3" to="/">
          <img src={logo} alt="logo" width="80" height="80"/>
        </Link>
       
      </nav>
    </div>
  );
};
