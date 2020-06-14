import React from 'react';
import TotalWater from './TotalWater'
import Achivements from './Achivements';
import Body from './Body'
import Sentence from './Sentence'
import IncrementButtons from './IncrementButtons';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    total: 0,
    maximum: 3500
  }

  executeNewAmount = (amount) => {
    let total = this.state.total + amount;
    if (total < 0) {
      total = 0;
    }
    this.setState({ total })
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="row header">
          <TotalWater total={this.state.total} />
          <Achivements />
        </div>
        <Body />
        <div className="row">
          <Sentence />
        </div>
        <div className="row">
          <IncrementButtons onClick={this.executeNewAmount} />
        </div>
      </div>
    );
  }
}

export default App;
