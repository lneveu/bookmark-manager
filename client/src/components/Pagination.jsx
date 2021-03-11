import React from 'react';
import RCPagination from 'rc-pagination';
import RCPaginationLocale from 'rc-pagination/lib/locale/fr_FR';
import PropTypes from 'prop-types';
import { LeftChevronIcon, RightChevronIcon } from './Icons';

const Pagination = ({ current, total, onChange, limit }) => {
  const handlePaginationChange = (current, limit) => {
    onChange({ current, limit });
  };

  const itemRender = (page, type, element) => {
    if (type === 'page') {
      return (
        <button
          className={`relative focus:outline-none inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium  ${
            page === current ? 'text-indigo-700 bg-indigo-100' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      );
    }

    if (type === 'prev') {
      return (
        <button className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 focus:outline-none rounded-l-md hover:bg-gray-50">
          <LeftChevronIcon />
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 focus:outline-none rounded-r-md hover:bg-gray-50">
          <RightChevronIcon />
        </button>
      );
    }
    return element;
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 sm:px-6">
      <div className="flex items-center justify-center flex-1">
        <RCPagination
          className="relative z-0 inline-flex items-center rounded-md shadow-sm -space-x-px"
          current={current}
          total={total}
          pageSize={limit}
          onChange={handlePaginationChange}
          itemRender={itemRender}
          locale={RCPaginationLocale}
        ></RCPagination>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
  limit: PropTypes.number
};

export default Pagination;
