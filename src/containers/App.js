import React, { Component } from 'react';
import Card from '../components/Card';
import InputBox from '../components/InputBox';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchfield: 'Robot'
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { searchfield } = this.state;
    const myDefault = 'Robot';
    let myInput;
    !searchfield.length ? myInput = myDefault : myInput = searchfield;
    return (
      <div className="App">
        <header className='ma0 pa2 black'><h1>Find your robotic alter-ego!</h1></header>
        <InputBox searchChange={this.onSearchChange} />
        <Card searchfield={myInput} />
      </div>
    );
  }
}

export default App;
