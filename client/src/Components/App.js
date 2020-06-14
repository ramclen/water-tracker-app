import React from 'react';
import TotalWater from './TotalWater'
import Achivements from './Achivements';
import Body from './Body'
import Sentence from './Sentence'
import Increment from './Increment';
import EditMaxLevelModal, { manageModal } from "./EditMaxLevelModal";

function App() {
  return (
    <div className="container-fluid app">
      <div className="row header">
        <TotalWater />
        <Achivements />
      </div>
      <Body />
      <div className="row">
        <Sentence />
      </div>
      <div className="row">
        <Increment />
      </div>
    </div>
  );
}

export default App;
