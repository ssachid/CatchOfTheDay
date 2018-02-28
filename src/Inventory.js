import React from 'react';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    const fishes = {...this.state.fishes}

  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} onChange={this.handleChange}/>
        <input type="text" name="price" value={fish.price} onChange={this.handleChange}/>
        <select type="text" name="status" value={fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} onChange={this.handleChange}></textarea>
        <input type="text" name="image" value={fish.image} onChange={this.handleChange}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <p>Inventory</p>
        { Object.keys(this.props.fishes).map(this.renderInventory) }
        <AddFishForm addFish = {this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Fishes </button>
      </div>
    )
  }
}

export default Inventory;
