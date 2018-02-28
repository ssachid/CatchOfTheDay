import React from 'react';
import AddFishForm from './AddFishForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e,key) {
    const fish = this.props.fishes[key];
    const updatedFish = { ...fish, [e.target.name]: e.target.value};
    this.props.updateFish(key, updatedFish);
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
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
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

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
  addFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired
};


export default Inventory;
