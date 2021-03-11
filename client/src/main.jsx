import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimeAgo from 'javascript-time-ago';
import fr from 'javascript-time-ago/locale/fr';
import StoreProvider from './providers/StoreProvider';
import Modal from 'react-modal';

Modal.setAppElement('#root');
TimeAgo.addDefaultLocale(fr);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
