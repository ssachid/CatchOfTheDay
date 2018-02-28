import React from 'react';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e,key) {
    const fish = this.props.fishes[key];
    const updatedFish = { ...fish, [e.target.name]: e.target.value}
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} onChange={(e) => this.handleChange(e,key)}/>
        <input type="text" name="price" value={fish.price} onChange={(e) => this.handleChange(e,key)}/>
        <select type="text" name="status" value={fish.status} onChange={(e) => this.handleChange(e,key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} onChange={(e) => this.handleChange(e,key)}></textarea>
        <input type="text" name="image" value={fish.image} onChange={(e) => this.handleChange(e,key)}/>
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
