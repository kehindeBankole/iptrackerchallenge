import React from "react";
import {Link} from 'react-router-dom'
export const Nav = () => {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Navbar</Link>
       
      </nav>
    </div>
  );
};
