import React, { Component } from 'react';
import './App.css';
import ClockForm from './components/ClockForm';
import Clock from './components/Clock';

class App extends Component {
  state = {
    clocks: []
  };

  addClock = (name, timezone) => {
    this.setState((prevState) => ({
      clocks: [...prevState.clocks, { name, timezone }]
    }));
  };

  removeClock = (index) => {
    this.setState((prevState) => ({
      clocks: prevState.clocks.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
        <div className="App">
          <h1>World Clocks</h1>
          <ClockForm onAddClock={this.addClock} />
          <div className="clocks">
            {this.state.clocks.map((clock, index) => (
                <Clock
                    key={index}
                    name={clock.name}
                    timezone={clock.timezone}
                    onDelete={() => this.removeClock(index)}
                />
            ))}
          </div>
        </div>
    );
  }
}

export default App;
