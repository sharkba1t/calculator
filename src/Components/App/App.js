import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const operationKey = {
  "=": () => {},
  "+": function(first, second) {return first + second},
  "-": function(first, second) {return first + second},
  "*": function(first, second) {return first + second},
  "/": function(first, second) {return first + second},
  "%": function(number) {return number / 100},
  '±': function(number) {return -number},
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

  changeCurrentInput(input) {
    let inputDisplay = this.state.currentInput;
    let allInputs = this.state.input;
    if (input === "C"){
      inputDisplay = 0;
      allInputs = []
      this.setState({
        operation: '',
        isDecimal: false
      })
    } else if (operations.findIndex(element => element === input) > -1) {
       if (this.state.isOperation && input !== '='){
        allInputs[allInputs.length - 1] = input
        console.log(allInputs)
       } else {
        allInputs.push(inputDisplay);
        if (['+','-','*', '/'].indexOf(input) === -1) {
          this.setState({isDecimal: false, isOperation: true})
        }
        inputDisplay = this.operationDisplay(input);
      }
    } else if (input === '.'){
      if (!this.state.isDecimal) {
        inputDisplay += input
        this.setState({
          isDecimal: true
        })
    }} else if (this.state.currentInput === 0 || this.state.isOperation) {
      inputDisplay = input;
      this.setState({
        isOperation: false
      })
    } else {
        inputDisplay += input;
    }
    console.log(allInputs)
    this.setState(
      {
        currentInput: inputDisplay,
        input: allInputs
      })
  }


  operationDisplay(input) {
    let newNumber;
    if (['=','%','±'].indexOf(input) === -1){
    this.setState({
      operation: input
    }) 
  } else {
    newNumber = operationKey[input](this.state.currentInput)
    console.log(newNumber)
    this.setState({
      operation: ''
    }) 
  }
  return newNumber
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
