import React from "react";

const Pagination = ({ totalCards, cardPerPage, setCurrentpage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentpage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
