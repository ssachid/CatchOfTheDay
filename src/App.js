import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from './sample-fishes';
import _ from 'lodash';
import Fish from './Fish';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: {},
      order: {}
    }
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  addFish(fish) {
    const fishes = {...this.state.fishes}
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
  }

  loadSamples() {
    this.setState({fishes: SampleFishes })
  }

  render() {
    const { fishes } = this.state
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          { _.map(fishes, (fish,index) => <Fish key={index} details={fish}/>)}
        </div>
        <Order />
        <Inventory addFish = {this.addFish} loadSamples = { this.loadSamples }/>
      </div>
    )
  }
}

export default App;
