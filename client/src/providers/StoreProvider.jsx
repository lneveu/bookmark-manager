import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { storeReducer } from '../reducers/StoreReducer';

export const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const initialState = {
  total: 0,
  bookmarks: []
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.node
};
