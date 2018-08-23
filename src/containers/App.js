import React, { Component } from 'react';
import './App.css';
import Card from '../components/Card';
import InputBox from '../components/InputBox';

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchfield: 'example'
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { searchfield } = this.state;
    const myDefault = 'example';
    let myInput;
    !searchfield.length ? myInput = myDefault : myInput = searchfield;
    return (
      <div className="App">
        <InputBox searchChange={this.onSearchChange} />
        <Card searchfield={myInput} />
      </div>
    );
  }
}

export default App;
