import React, { useRef } from "react";

const Pagination = ({ photosPerPage, totalPhotos, paginate, searchValue }) => {
  const pageNumbers = [];
  const paginationRef = useRef();

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__list--item">
            <a onClick={() => paginate(number)} className="pagination__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
