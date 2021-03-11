import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import BaseModal from './BaseModal';
import InputTags from '../InputTags';
import useBookmarks from '../../hooks/useBookmarks';

const EditBookmarkTagsModal = ({ bookmarkId, bookmarkTags, isOpen, handleClose }) => {
  const { updateBookmarkTags } = useBookmarks();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tags, setTags] = useState(bookmarkTags);

  const handleEdit = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      await updateBookmarkTags(bookmarkId, tags);
      handleClose();
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoading(false);
    }
  }, [tags]);

  // reset inputtags when closing the modal
  const closeModal = useCallback(() => {
    setTags(bookmarkTags);
    handleClose();
  }, [handleClose, bookmarkTags]);

  return (
    <BaseModal
      title="Editer"
      isOpen={isOpen}
      handleClose={closeModal}
      content={
        <div>
          <InputTags id="edit_tags" tags={tags} onChange={(tags) => setTags(tags)}></InputTags>
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
          <Button color="secondary" onClick={closeModal}>
            Annuler
          </Button>
          <Button color="primary" className="mt-3 sm:ml-3" onClick={handleEdit} disabled={loading}>
            {loading ? 'Chargement...' : 'Enregistrer'}
          </Button>
        </div>
      }
    ></BaseModal>
  );
};

EditBookmarkTagsModal.propTypes = {
  bookmarkId: PropTypes.string,
  bookmarkTags: PropTypes.array,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default EditBookmarkTagsModal;
