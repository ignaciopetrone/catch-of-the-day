import PropTypes from "prop-types";
import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
   state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    const { params } = this.props.match;
    //1 First reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });    
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  };

  addFish = (fish) => {
    //1. Take a copy of a existing state
    const pescadito = { ...this.state.fishes };
    //2. Add our new fish to that fishes variable
    pescadito[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state 
    this.setState({
      fishes: pescadito    
    });
  };

  updateFish = (key, updatedFish) => {
    //1. Take a copy of the current state
    const pescadito = { ...this.state.fishes };
    //2. Update that state
    pescadito[key] = updatedFish;
    //3. Set that to state
    this.setState({ fishes: pescadito });
  };

  deleteFish = (key) => {
    //1. Take a copy of the current state
    const pescaditos = { ...this.state.fishes };
    //2. Update the state
    pescaditos[key] = null;
    //3. update the state
    this.setState({ fishes: pescaditos })
  };

  loadSampleFishes = () =>{
    this.setState({ fishes: sampleFishes });
  };  
  
  addToOrder = (key) => {
     //1. Take a copy of the current order
    const pedido = { ...this.state.order }
    //2. Either add to the order, or update the number in our order  
    pedido[key] = pedido[key] + 1 || 1;
    //3. Call setState to update our state object.   
    this.setState({ order: pedido });  
  };

  removeFromOrder = (key) => {
    //1 Take a copy of the current order
    const pedido = { ...this.state.order }
    //2. Either remove from the order, or update the number in our order
    delete pedido[key];
    //3. update our order
    this.setState({ order: pedido });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>(
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder} 
              />
            ))}
          </ul>
        </div>
        <Order // i can also pass the entire state "{...this.state}"
          fishes={this.state.fishes}
          order={this.state.order}   
          removeFromOrder={this.removeFromOrder} 
        />
        <Inventory 
          addFish={this.addFish}
          updateFish={this.updateFish} 
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );

  }

}

export default App;
