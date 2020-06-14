import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Modal from './Components/Modal';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.createPortal(<Modal />, document.getElementById("modal"));

serviceWorker.unregister();
