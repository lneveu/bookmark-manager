import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookmarkItem from './BookmarkItem';
import Pagination from './Pagination';
import useBookmarks from '../hooks/useBookmarks';

const BookmarkList = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationData, setPaginationData] = useState({ current: 1, limit: 10 });
  const { total, bookmarks, fetchBookmarks } = useBookmarks();

  const fetchData = async function () {
    try {
      setError(null);
      setLoading(true);
      const offset = (paginationData.current - 1) * paginationData.limit;
      await fetchBookmarks({ type, limit: paginationData.limit, offset });
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, paginationData]);

  useEffect(() => {
    // if the deleted bookmark was the last item on the page, we need to move to the previous one
    if (paginationData.current > 1 && bookmarks.length === 0) {
      setPaginationData({ ...paginationData, current: --paginationData.current });
      // after a deletion, we need to rebuild the list to re-organize it
    } else if (total > bookmarks.length && bookmarks.length < paginationData.limit) {
      fetchData();
    }
  }, [total]);

  const handlePaginationChange = useCallback(({ current, limit }) => {
    setPaginationData({ current, limit });
  }, []);

  const renderLoader = () => {
    if (error) {
      return <div className="p-5 text-center text-red-600">Erreur lors du chargement: {error}</div>;
    }

    if (loading) {
      if (total === 0) {
        return <div className="p-5 text-center">Chargement...</div>;
      } else {
        return (
          <div className="absolute flex items-center justify-center w-full h-full bg-white bg-opacity-75">
            Chargement...
          </div>
        );
      }
    }

    if (total === 0) {
      return <div className="p-5 text-center">Aucun favori</div>;
    }
  };

  return (
    <>
      <div className="relative overflow-hidden bg-white shadow rounded-md">
        <div className="overflow-hidden bg-white shadow rounded-md">
          {renderLoader()}
          <ul className="divide-y divide-gray-200">
            {!error &&
              bookmarks.map((bookmark) => (
                <li key={bookmark._id}>
                  <BookmarkItem {...bookmark}></BookmarkItem>
                </li>
              ))}
          </ul>
        </div>
        <Pagination
          current={paginationData.current}
          total={total}
          limit={paginationData.limit}
          onChange={handlePaginationChange}
        ></Pagination>
      </div>
    </>
  );
};

BookmarkList.propTypes = {
  type: PropTypes.string
};

export default BookmarkList;
