import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';

const InputTags = ({ id, tags, onChange }) => {
  const customRenderTag = ({ tag, key, onRemove, getTagDisplayValue }) => {
    return (
      <span
        key={key}
        className="inline-flex items-center pr-1 m-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full py-0.5 pl-2.5"
      >
        {getTagDisplayValue(tag)}
        <button
          type="button"
          className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 text-indigo-400 rounded-full ml-0.5 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
          onClick={() => onRemove(key)}
        >
          <span className="sr-only">Supprimer</span>
          <svg className="w-2 h-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      </span>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const customRenderInput = ({ addTag, ...props }) => {
    return (
      <input
        id={id}
        type="text"
        {...props}
        className="block w-full mt-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    );
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        Mots clés
      </label>
      <TagsInput
        onlyUnique={true}
        renderTag={customRenderTag}
        renderInput={customRenderInput}
        removeKeys={[]}
        inputProps={{
          placeholder: 'Ajouter un mot clé'
        }}
        value={tags}
        onChange={(tag) => onChange(tag)}
      />
      <p className="mt-2 text-sm text-gray-500">Valider chaque mot clé avec Entrée.</p>
    </div>
  );
};

InputTags.propTypes = {
  id: PropTypes.string,
  tags: PropTypes.array,
  onChange: PropTypes.func
};

export default InputTags;
