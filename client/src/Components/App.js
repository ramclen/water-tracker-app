import React from 'react';
import TotalWater from './TotalWater'
import Achivements from './Achivements';
import Body from './Body'
import Sentence from './Sentence'
import IncrementButtons from './IncrementButtons';
import aws from '../api/aws';

class App extends React.Component {
  state = {
    id: 0,
    level: 0,
    maxLevel: 0
  }

  componentDidMount() {
    aws.get('water-levels').then(result => {
      this.setState(result.data)
    })
    // TODO: Control errors 
  }

  executeNewAmount = (amount) => {
    let level = this.state.level + amount;
    if (level < 0) {
      level = 0;
    }
    this.setState({ level });
    aws.put(`water-levels/${this.state.id}`, { level: this.state.level, maxLevel: this.state.maxLevel })
  }

  maxValueChange = (maxLevel) => {
    this.setState({ maxLevel })
    aws.put(`water-levels/${this.state.id}`, { level: this.state.level, maxLevel: this.state.maxLevel })
  }

  render() {
    return (
      <div className="container-fluid app">
        <div className="row header">
          <TotalWater total={this.state.level} />
          <Achivements />
        </div>
        <Body
          totalDrink={this.state.level}
          maxValue={this.state.maxLevel}
          maxValueChange={this.maxValueChange}
        />
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
