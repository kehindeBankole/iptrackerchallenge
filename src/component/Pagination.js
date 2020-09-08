import React from "react";

function Pagination({ postperpage, totpost , paginate }) {
  const pageno = [];
  for (let x = 1; x < Math.ceil(totpost / postperpage); x++) {
    pageno.push(x);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageno.map((no) => {
            return (
              <li className="page-item">
                <a onClick={()=>paginate(no)} className="page-link">
                  {no}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
