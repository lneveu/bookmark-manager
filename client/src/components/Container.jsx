import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { BookmarkIcon } from './Icons';

const Container = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
      {/* header */}
      <div className="relative flex flex-shrink-0 h-16 bg-white shadow">
        <NavLink
          to="/"
          className="flex items-center px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          title="Mes tags"
        >
          <span className="sr-only">Mes favoris</span>
          <BookmarkIcon />
        </NavLink>
        <div className="flex items-center justify-end flex-1 px-4">
          <Link to="/add">
            <Button color="primary">Ajouter un favori</Button>
          </Link>
        </div>
      </div>
      {/* main content */}
      <main className="relative flex-1 overflow-y-auto focus:outline-none" tabIndex="0">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">{children}</div>
        </div>
      </main>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
