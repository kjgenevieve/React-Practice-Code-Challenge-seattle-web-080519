import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eatenSushis: [],
      displayIndex: 0,
      money: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then((data) => this.setState({
          sushis: data
        }));
  }

  displaySushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, (this.state.displayIndex + 4))
  }

  more = () => { 
    if (this.state.displayIndex + 4 > this.state.sushis.length) {
      this.setState({
        displayIndex: 0
      })
    } else {
      this.setState(prevState => ({
        displayIndex: prevState.displayIndex + 4
      }))
    }
  }

  eat = (sushi) => {
    if (sushi.price > this.state.money) {
      console.log("Not enough money!")
    } else {
      this.setState(prevState => ({
        eatenSushis: [...prevState.eatenSushis, sushi],
        money: [prevState.money - sushi.price]
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          displaySushis={this.displaySushis()}
          eatenSushis={this.state.eatenSushis}
          more={this.more}
          eat={this.eat}
        />
        <Table money={this.state.money} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;