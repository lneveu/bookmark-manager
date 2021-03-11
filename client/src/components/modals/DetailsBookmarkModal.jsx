import React from 'react';
import PropTypes from 'prop-types';
import BaseModal from './BaseModal';
import { BookmarkTypes, ProviderLabels } from '../../constants';

const Item = ({ label, value }) => {
  return (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  );
};

Item.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

const DetailsBookmarkModal = ({ bookmarkData, isOpen, handleClose }) => {
  const { title, url, type, provider, author, createdAt, width, height, duration, tags } = bookmarkData;
  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      content={
        <div>
          <div className="pb-5">
            <h3 className="text-lg font-medium text-gray-900 leading-6">{title}</h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-500 truncate">
              <a
                href={url}
                className="font-medium text-blue-600 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url}
              </a>
            </p>
          </div>
          <div className="py-5 border-t border-gray-200">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <Item label="Type" value={type}></Item>
              <Item label="Plateforme" value={ProviderLabels[provider]}></Item>
              <Item label="Auteur" value={author}></Item>
              <Item label="Date d'ajout" value={new Intl.DateTimeFormat('fr-FR').format(new Date(createdAt))}></Item>
              <Item label="Largeur" value={`${width}px`}></Item>
              <Item label="Hauteur" value={`${height}px`}></Item>
              {type === BookmarkTypes.Video && <Item label="Durée" value={`${duration}sec`}></Item>}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Mots-clés</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 mx-1 my-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      }
    ></BaseModal>
  );
};

DetailsBookmarkModal.propTypes = {
  bookmarkData: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default DetailsBookmarkModal;
