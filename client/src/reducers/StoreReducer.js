export const Actions = {
  SET_BOOKMARKS: 'set-bookmarks',
  CREATE_BOOKMARK: 'create-bookmark',
  UPDATE_BOOKMARK_TAGS: 'update-bookmark-tags',
  DELETE_BOOKMARK: 'delete-bookmark'
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_BOOKMARKS:
      return { ...state, total: action.total, bookmarks: action.bookmarks };
    case Actions.CREATE_BOOKMARK:
      return { ...state, total: ++state.total, bookmarks: [action.bookmark, ...state.bookmarks] };
    case Actions.UPDATE_BOOKMARK_TAGS:
      return {
        ...state,
        bookmarks: state.bookmarks.map((b) => (b._id === action.id ? { ...b, tags: action.tags } : b))
      };
    case Actions.DELETE_BOOKMARK:
      return {
        ...state,
        total: --state.total,
        bookmarks: state.bookmarks.filter((b) => b._id !== action.id)
      };
    default:
      return state;
  }
};
