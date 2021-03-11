import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import DeleteBookmarkModal from './modals/DeleteBookmarkModal';
import EditBookmarkTagsModal from './modals/EditBookmarkTagsModal';
import { BookmarkTypes, ProviderLabels, ProviderTypes } from '../constants';
import { PictureIcon, VideoIcon, AuthorIcon, CalendarIcon, LinkIcon, TrashIcon, EditIcon, EyeIcon } from './Icons';
import DetailsBookmarkModal from './modals/DetailsBookmarkModal';

const BookmarkItem = (props) => {
  const { _id, type, provider, url, title, author, createdAt, tags } = props;
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  return (
    <div className="block hover:bg-gray-50">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 truncate"
          >
            {title}
          </a>
          <div className="flex flex-shrink-0 ml-2">
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 ml-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded py-0.5"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between ">
          <div className="min-w-0 sm:flex">
            <p className="flex items-center text-sm text-gray-500">
              {type === BookmarkTypes.Photo ? <PictureIcon /> : <VideoIcon />}
              {ProviderLabels[provider]}
            </p>
            <p className="flex items-center mt-2 text-sm text-gray-500 truncate sm:mt-0 sm:ml-6">
              <AuthorIcon />
              {author}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-2 text-sm text-gray-500 truncate sm:mt-0 sm:ml-6"
            >
              <LinkIcon />
              {url}
            </a>
          </div>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-500 sm:mt-0">
            <div className="flex items-center">
              <CalendarIcon />
              <ReactTimeAgo date={new Date(createdAt)} />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setDetailsModalOpen(true)}
                className="inline-flex items-center p-1 ml-6 text-white bg-gray-300 border border-transparent rounded-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <EyeIcon />
              </button>
              <button
                type="button"
                onClick={() => setEditModalOpen(true)}
                className="inline-flex items-center p-1 ml-2 text-white bg-gray-300 border border-transparent rounded-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <EditIcon />
              </button>
              <button
                type="button"
                onClick={() => setDeleteModalOpen(true)}
                className="inline-flex items-center p-1 ml-2 text-white bg-gray-300 border border-transparent rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DetailsBookmarkModal
        bookmarkData={props}
        isOpen={isDetailsModalOpen}
        handleClose={() => setDetailsModalOpen(false)}
      ></DetailsBookmarkModal>
      <EditBookmarkTagsModal
        bookmarkId={_id}
        bookmarkTags={tags}
        isOpen={isEditModalOpen}
        handleClose={() => setEditModalOpen(false)}
      ></EditBookmarkTagsModal>
      <DeleteBookmarkModal
        bookmarkId={_id}
        isOpen={isDeleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
      ></DeleteBookmarkModal>
    </div>
  );
};

BookmarkItem.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BookmarkTypes)),
  provider: PropTypes.oneOf(Object.values(ProviderTypes)),
  url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
  tags: PropTypes.array
};

export default BookmarkItem;
