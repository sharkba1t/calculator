import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const operationKey = {
  "=": 6,
  "+": 1,
  "-": 2,
  "*": 3,
  "/": 4,
  "%": 5,
  '±': 7,
}

const operations = Object.keys(operationKey)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: 0,
      previousInput: 0,
      input: [],
      operation: '',
      isDecimal: false,
      isOperation: false
    }
    this.changeCurrentInput = this.changeCurrentInput.bind(this);
    this.operationDisplay = this.operationDisplay.bind(this);
  }

  changeCurrentInput(number) {
    let inputDisplay = this.state.currentInput;
    let allInputs = this.state.input;
    if (number === "C"){
      inputDisplay = 0;
      allInputs = []
      this.setState({
        operation: ''
      })
    } else if (operations.findIndex(element => element === number) > -1) {
       if (this.state.isOperation && number !== '='){
        allInputs[allInputs.length - 1] = number
        console.log(allInputs)
       } else {
        this.operationDisplay(operations.findIndex(element => element === number));
        allInputs.push(inputDisplay);
        allInputs.push(number);
        this.setState({
          isOperation: true
        })
      }
    } else if (this.state.currentInput === 0 || this.state.isOperation) {
      inputDisplay = number;
      this.setState({
        isOperation: false
      })
    } else {
        inputDisplay += number;
    }
    console.log(allInputs)
    this.setState(
      {
        currentInput: inputDisplay,
        input: allInputs
      })
  }

  operationDisplay(index) {
    if (operations[index] !== '='){
    this.setState({
      operation: operations[index]
    }) 
  } else {
    this.setState({
      operation: ''
    }) 
  }
  }

  render(){
    return (
      <div className='app'>
        <div className='mainArea'>
          <Display value= {this.state.currentInput} operationKey={this.state.operation}/>
          <Keypad onClick={this.changeCurrentInput} />
         </div>
      </div>
    )
  }
}


export default App;
