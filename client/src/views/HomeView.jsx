import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import BookmarkList from '../components/BookmarkList';
import { BookmarkTypes } from '../constants';

const HomeView = () => {
  const location = useLocation();

  const type = useMemo(() => {
    switch (location.pathname) {
      case '/photos':
        return BookmarkTypes.Photo;
      case '/videos':
        return BookmarkTypes.Video;
      default:
        return undefined;
    }
  }, [location]);

  return <BookmarkList type={type}></BookmarkList>;
};

export default HomeView;
