import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from './sample-fishes';
// import _ from 'lodash';
import Fish from './Fish';
import base from './base';

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

  componentWillMount() {
    const { pathname } = this.props.history.location
    this.ref = base.syncState(`${pathname}/fishes`, { context: this, state: 'fishes' })

    const localStorageRef = localStorage.getItem(`order-${pathname}`);

    if ( localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    }
  }

 componentWillUnmount() {
  base.removeBinding(this.ref);
 }

 componentWillUpdate(nextProps, nextState) {
  localStorate.setItem(`order-${this.props.history.location}`, JSON.stringify(nextState.order))
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
        <Order fishes = {this.state.fishes} order={this.state.order} history = {this.props.history.location} />
        <Inventory addFish = {this.addFish} loadSamples = { this.loadSamples }/>
      </div>
    )
  }
}

export default App;
