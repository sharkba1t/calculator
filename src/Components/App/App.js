import React from 'react';
import './App.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

const operationKey = {
  "=": (first, second, operation) => {return this[operation](first, second)},
  "+": function(first, second) {return first + second},
  "-": function(first, second) {return first - second},
  "*": function(first, second) {return first * second},
  "/": function(first, second) {return first / second},
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
      isFirstNumber: true,
      isPreviousInput: false
    }
    this.changeCurrentInput = this.changeCurrentInput.bind(this);
    this.operationDisplay = this.operationDisplay.bind(this);
    this.resetDisplay = this.resetDisplay.bind(this);
  }

  changeCurrentInput(input) {
    let inputDisplay = this.state.currentInput;
    let allInputs = this.state.input;
    let previousInput;
    if (input === "C"){
      inputDisplay = 0;
      allInputs = []
      this.resetDisplay()
    } else if (operations.findIndex(element => element === input) > -1) {
        this.setState({currentInput: inputDisplay})
        if (!this.state.isPreviousInput) {
          previousInput = this.state.currentInput;
          console.log('this happened.')
          this.setState({
            previousInput: previousInput,
            currentInput: inputDisplay
          })
        }
        allInputs.push(inputDisplay); 
        if (['+','-','*', '/'].indexOf(input) !== -1) {
          this.setState({isDecimal: false, isPreviousInput: true})
          allInputs.push(input);
        } 
        inputDisplay = this.operationDisplay(input) || inputDisplay;
      }
      else if (input === '.'){
      if (!this.state.isDecimal) {
        inputDisplay += input
        this.setState({
          isDecimal: true
        })
    }} else if (this.state.isFirstNumber) {
      inputDisplay = input;
      this.setState({
        isFirstNumber: false,
        currentInput: inputDisplay,
        input: allInputs
      })
    } else {
        inputDisplay += input;
        this.setState(
          {
            currentInput: inputDisplay,
            input: allInputs
          })
    }
    console.log(allInputs)
    this.setState(
      {
        currentInput: inputDisplay,
      })
  }

  resetDisplay() {
    this.setState({
      operation: '',
      currentInput: 0,
      previousInput: 0,
      isDecimal: false,
      isPreviousInput: false,
      isFirstNumber: true
    })
  }

  operationDisplay(input) {
    let newNumber;
    let first = parseFloat(this.state.previousInput);
    let second = parseFloat(this.state.currentInput);
    let inputs = this.state.input
    if (input === '='){
      console.log(inputs)
      newNumber = operationKey[inputs[1]](parseFloat(inputs[0]),parseFloat(inputs[2]))
      this.setState({input: [newNumber] })
      return newNumber
    } else if (['=','%','±'].indexOf(input) === -1){
      if (!this.state.isPreviousInput){
        newNumber = this.state.currentInput;
    this.setState({
      operation: input,
      currentInput: 0,
      isFirstNumber: true,
      isPreviousInput: true
    }) 
  } else {
      newNumber = operationKey[input](first, second);
      this.setState({
        operation: '',
        previousInput: newNumber,
        currentInput: 0,
        isPreviousInput: false,
        input: [newNumber]
      })
      return newNumber;
    }
  } else {
    newNumber = operationKey[input](this.state.currentInput)
    return newNumber
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
