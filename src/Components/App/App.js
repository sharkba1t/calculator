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
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeCurrentInput(number) {
    this.setState({
      currentInput: number
    })
  }

  changeDisplay() {
    return '0'
  }

  render(){
    return (
      <div className='app'>
        <Display value= {this.state.currentInput} />
         <Keypad onClick={this.changeCurrentInput}/>
      </div>
    )
  }
}


export default App;
