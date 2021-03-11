import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { CrossIcon } from '../Icons';

const BaseModal = ({ isOpen, handleClose, title, content, footer }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={title}
      overlayClassName="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
      className="absolute px-4 pt-5 pb-4 m-auto overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl outline-none top-40 left-20 right-20 sm:left-40 sm:right-40 transform transition-all sm:my-auto sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
    >
      <div className="absolute top-0 right-0 block pt-4 pr-4">
        <button
          onClick={handleClose}
          type="button"
          className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">Fermer</span>
          <CrossIcon />
        </button>
      </div>
      <div className="sm:flex sm:items-start">
        <div className="w-full mt-3 sm:mt-0 sm:pl-4">
          {title && <h3 className="text-lg font-medium text-center text-gray-900 sm:text-left leading-6">{title}</h3>}
          <div className="mt-3 text-left">{content}</div>
        </div>
      </div>
      {footer && <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">{footer}</div>}
    </Modal>
  );
};

BaseModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node
};

export default BaseModal;
