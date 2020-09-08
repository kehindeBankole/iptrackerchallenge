import React from "react";
import {Link , NavLink} from 'react-router-dom'
function Pagination({ postperpage, totpost , paginate }) {
  const pageno = [];
  for (let x = 1; x < Math.ceil(totpost / postperpage); x++) {
    pageno.push(x);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageno.map((no , i) => {
            return (
              <li className="page-item"  key={i}>
                <NavLink to=""onClick={()=>paginate(no)} className="page-link">
                  {no}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
