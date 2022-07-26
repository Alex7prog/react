import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = true;
  let isNextPageAvailable = true;
  let textPrevBtn = '←';
  let textNextBtn = '→';

  if (totalItems === 0 || currentPage === 1) {
    isPrevPageAvailable = false;
    textPrevBtn = null;
  }

  if (totalItems === 0 || currentPage === Math.ceil(totalItems / itemsPerPage)) {
    isNextPageAvailable = false;
    textNextBtn = null;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {textPrevBtn}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {textNextBtn}
      </button>
    </div>
  );
};

export default Pagination;
