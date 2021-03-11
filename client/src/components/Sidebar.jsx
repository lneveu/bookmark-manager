import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BookmarkIcon, PictureIcon, VideoIcon } from './Icons';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <h2 className="text-2xl font-bold text-gray-900 leading-7 sm:text-3xl">Mes favoris</h2>
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <nav className="flex-1 px-2 bg-white">
              <div className="space-y-1">
                <NavLink
                  to="/"
                  isActive={() => pathname === '/'}
                  activeClassName="bg-gray-100 hover:bg-gray-100"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md"
                >
                  <BookmarkIcon className="w-6 h-6 mr-3 text-gray-500" />
                  Tous
                </NavLink>
                <NavLink
                  to="/photos"
                  activeClassName="bg-gray-100 hover:bg-gray-100"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md"
                >
                  <PictureIcon className="w-6 h-6 mr-3 text-gray-500" />
                  Photo
                </NavLink>
                <NavLink
                  to="/videos"
                  activeClassName="bg-gray-100 hover:bg-gray-100"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 group rounded-md"
                >
                  <VideoIcon className="w-6 h-6 mr-3 text-gray-500"></VideoIcon>
                  Video
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
