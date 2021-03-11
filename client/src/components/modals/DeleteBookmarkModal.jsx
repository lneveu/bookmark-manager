import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import BaseModal from './BaseModal';
import useBookmarks from '../../hooks/useBookmarks';

const DeleteBookmarkModal = ({ bookmarkId, isOpen, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { deleteBookmark } = useBookmarks();

  const handleDelete = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      await deleteBookmark(bookmarkId);
      // here, the component is deleted. No need to reset the loading state / close modal.
    } catch (error) {
      setError(error.message || error);
      setLoading(false);
    }
  }, []);

  return (
    <BaseModal
      title="Supprimer"
      isOpen={isOpen}
      handleClose={handleClose}
      content={
        <div>
          <p className="text-sm text-gray-500">Êtes-vous sûr de vouloir supprimer ce favori ?</p>
          {error && (
            <div className="mt-3">
              <p className="text-red-600">
                Une erreur s&apos;est produite : <strong>{error}</strong>
              </p>
            </div>
          )}
        </div>
      }
      footer={
        <div>
          <Button color="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button color="danger" className="mt-3 sm:ml-3" onClick={handleDelete} disabled={loading}>
            {loading ? 'Chargement...' : 'Supprimer'}
          </Button>
        </div>
      }
    ></BaseModal>
  );
};

DeleteBookmarkModal.propTypes = {
  bookmarkId: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default DeleteBookmarkModal;
