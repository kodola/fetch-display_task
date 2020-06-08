import React from 'react';

const Pagination = ({companiesPerPage, totalCompanies, onPaginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCompanies / companiesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination_list">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <button className="pagination_btn" onClick={() => onPaginate(number)}>
                            <p className="pagination_num">{number}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;