import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`
        w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed
        ${
          color === 'primary'
            ? 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700 focus:ring-indigo-500'
            : ''
        }
        ${
          color === 'secondary'
            ? 'bg-white border-gray-300 text-gray-700 hover:text-gray-500 focus:ring-indigo-500'
            : ''
        }
        ${color === 'danger' ? 'bg-red-600 text-white border-transparent hover:bg-red-700 focus:ring-red-500' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary'
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
