import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '0',
      input: []
    }
    this.changeCurrentInput = this.changeCurrentInput.bind(this);
    this.mathOperation = this.mathOperation.bind(this);
  }

  changeCurrentInput(number) {
    let inputDisplay = this.state.currentInput;
    if (number === "c"){
      inputDisplay = '0';
    }  else if (this.state.currentInput === '0') {
      inputDisplay = number;

    }
    else {
    inputDisplay += number;
    }
    this.setState(
      {
        currentInput: inputDisplay
      })
  }

  mathOperation() {
    
  }

  render(){
    return (
      <div className='app'>
        <div className='mainArea'>
          <Display value= {this.state.currentInput} />
          <Keypad onClick={this.changeCurrentInput} />
         </div>
      </div>
    )
  }
}


export default App;
