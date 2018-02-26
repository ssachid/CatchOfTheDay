import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from './sample-fishes';
// import _ from 'lodash';
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
    this.addToOrder = this.addToOrder.bind(this);
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

  addToOrder(key) {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1
    this.setState({order})
  }

  render() {
    const { fishes } = this.state
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
             {
                Object
                  .keys(this.state.fishes)
                  .map(key => <Fish key={key} index = {key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
             }
        </div>
        <Order fishes = {this.state.fishes} order={this.state.order} />
        <Inventory addFish = {this.addFish} loadSamples = { this.loadSamples }/>
      </div>
    )
  }
}

export default App;
