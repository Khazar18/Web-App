import React from 'react';
import './pagination.css';

export const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range of visible pages near the current page
  const maxVisiblePages = 3; // Show 3 pages around the current page
  let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(2, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {/* Previous Button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>
        </li>

        {/* First Page */}
        <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
          <button onClick={() => paginate(1)} className="page-link">
            1
          </button>
        </li>

        {/* Spacer after the first page */}
        {startPage > 2 && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Dynamic Page Numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

        {/* Spacer before the last page */}
        {endPage < totalPages - 1 && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Last Page */}
        <li className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
          <button onClick={() => paginate(totalPages)} className="page-link">
            {totalPages}
          </button>
        </li>

        {/* Next Button */}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};
