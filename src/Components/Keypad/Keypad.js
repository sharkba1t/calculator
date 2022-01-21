import React from 'react';
import Button from '../Button/Button';
import './Keypad.css';

class Keypad extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this)
    }
    handleInput(number){
    if (number === 'c'){
        this.clearDisplay()
    } else {
      this.props.onClick(number);
    }
    }

    clearDisplay() {
        this.props.onClick('c');
    }

    render(){
        return(
            <div className='keypad'>
                <Button value='C' onClick={this.clearDisplay}/>
                <Button value='±'/>
                <Button value='%'/>
                <Button value='/'/>
                <Button value='7' onClick={this.handleInput}/>
                <Button value='8' onClick={this.handleInput}/>
                <Button value='9' onClick={this.handleInput}/>
                <Button value='*' onClick={this.handleInput}/>
                <Button value='4' onClick={this.handleInput}/>
                <Button value='5' onClick={this.handleInput}/>
                <Button value='6' onClick={this.handleInput}/>
                <Button value='-' onClick={this.handleInput}/>
                <Button value='1' onClick={this.handleInput}/>
                <Button value='2' onClick={this.handleInput}/>
                <Button value='3' onClick={this.handleInput}/>
                <Button value='+' onClick={this.handleInput}/>
                <Button className='zero' value='0' onClick={this.handleInput}/>
                <Button value='.'/>
                <Button value='='/>
            </div>
        );
    }
}

export default Keypad