import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'iamusername'
  };

  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    }) 
  }

  onFocusHandler = (event) => {
    event.target.value = "";
  }

  onBlurHandler = (event) => {
    event.target.value = this.state.username;
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          onChange={this.onChangeHandler} 
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          username={this.state.username} 
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
