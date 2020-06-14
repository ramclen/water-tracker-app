import React from 'react';
import TotalWater from './TotalWater'
import Achivements from './Achivements';
import Body from './Body'
import IncrementActions from './IncrementActions';
import aws from '../api/aws';
import { Row, Col } from 'react-bootstrap';

class App extends React.Component {
  state = {
    id: 0,
    level: 0,
    targetLevel: 0
  }

  componentDidMount() {
    aws.get('water-levels').then(result => {
      this.setState(result.data)
    }).catch(e => {
      console.error('Error requesting water-levels: ', e)
    })
  }

  executeNewAmount = (amount) => {
    let level = this.state.level + amount;
    if (level < 0) {
      level = 0;
    }
    this.setState({ level });
    aws.put(`water-levels/${this.state.id}`, { level: this.state.level, targetLevel: this.state.targetLevel }).catch(e => {
      console.error('Error requesting an update for a level change: ', e)
    })
  }

  targetValueChange = (targetLevel) => {
    this.setState({ targetLevel })
    aws.put(`water-levels/${this.state.id}`, { level: this.state.level, targetLevel: this.state.targetLevel }).catch(e => {
      console.error('Error requesting an update for a target value change: ', e)
    })
  }

  render() {
    return (
      <div className="container-fluid app">
        <Row className="header">
          <TotalWater total={this.state.level} />
          <Achivements />
        </Row>
        <Body
          totalDrink={this.state.level}
          targetValue={this.state.targetLevel}
          targetValueChange={this.targetValueChange}
        />
        <Row>
          <Col xs={12} className="sentence"> Nice work! Keep it up!</Col>
        </Row>
        <Row>
          <IncrementActions onClick={this.executeNewAmount} />
        </Row>
      </div>
    );
  }
}

export default App;
