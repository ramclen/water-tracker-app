import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './Components/App';
import EditMaxLevelModal from './Components/EditMaxLevelModal';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.createPortal(<EditMaxLevelModal />, document.getElementById("modal"));
