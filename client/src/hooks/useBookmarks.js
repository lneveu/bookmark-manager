import { useStore } from '../providers/StoreProvider';
import { Actions } from '../reducers/StoreReducer';
import { jsonFetch } from '../api';

export default function useBookmarks() {
  const { state, dispatch } = useStore();

  return {
    total: state.total,
    bookmarks: state.bookmarks,
    fetchBookmarks: async ({ type, limit, offset }) => {
      const data = await jsonFetch('/bookmarks', {}, { type, limit, offset });
      dispatch({ type: Actions.SET_BOOKMARKS, total: data.total, bookmarks: data.results });
    },
    deleteBookmark: async (id) => {
      await jsonFetch(`/bookmarks/${id}`, { method: 'DELETE' });
      dispatch({ type: Actions.DELETE_BOOKMARK, id });
    },
    updateBookmarkTags: async (id, tags) => {
      await jsonFetch(`/bookmarks/${id}/tags`, { method: 'PATCH', body: { tags } });
      dispatch({ type: Actions.UPDATE_BOOKMARK_TAGS, id, tags });
    },
    createBookmark: async ({ url, tags }) => {
      const bookmark = await jsonFetch(`/bookmarks`, { method: 'POST', body: { url, tags } });
      dispatch({ type: Actions.CREATE_BOOKMARK, bookmark });
    }
  };
}
