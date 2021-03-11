import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import InputTags from './InputTags';
import useBookmarks from '../hooks/useBookmarks';

const AllowedHostnameRegexp = /^(vimeo\.com|(.+\.)?flickr\.com)$/;

const AddBookmarkForm = () => {
  const history = useHistory();
  const { createBookmark } = useBookmarks();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ url: null, server: null });
  const [data, setData] = useState({ url: '', tags: [] });

  const handleUrlChange = (url) => {
    let errorUrl = null;
    if (url !== '') {
      try {
        const urlObj = new URL(url);
        if (!AllowedHostnameRegexp.test(urlObj.host)) {
          errorUrl = "Le lien n'est pas supporté.";
        }
      } catch (e) {
        errorUrl = "Le lien n'est pas valide.";
      }
    }
    setErrors({ ...errors, server: null, url: errorUrl });
    setData((data) => ({ ...data, url }));
  };

  const handleTagsChange = (tags) => {
    setData((data) => ({ ...data, tags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({ ...errors, server: null });
      setLoading(true);
      await createBookmark(data);
      history.push('/');
    } catch (error) {
      setErrors({
        ...errors,
        server: error.message || error
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 leading-6">Ajouter un favori</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="bookmark_url" className="block text-sm font-medium text-gray-700">
                Lien
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="bookmark_url"
                  id="bookmark_url"
                  required={true}
                  className="block w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={(e) => handleUrlChange(e.target.value)}
                />
              </div>
              {errors.url && <p className="mt-2 text-sm text-red-600">{errors.url}</p>}
              <p className="mt-2 text-sm text-gray-500">Seuls les liens Flickr et Vimeo sont supportés.</p>
            </div>
            <div className="sm:col-span-6">
              <InputTags id="bookmark_tags" tags={data.tags} onChange={handleTagsChange}></InputTags>
            </div>
            <div className="sm:col-span-6">
              {errors.server && (
                <p className="text-red-600">
                  Une erreur s&apos;est produite : <strong>{errors.server}</strong>
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={Object.values(errors).filter((e) => e !== null).length > 0 || loading}>
              {loading ? 'Chargement...' : 'Ajouter'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBookmarkForm;
