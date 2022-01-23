import React from 'react';
import Button from '../Button/Button';
import './Keypad.css';

class Keypad extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(number){
      this.props.onClick(number);
    }


    render(){
        return(
            <div className='keypad'>
                <Button value='C' className='function' onClick={this.handleInput}/>
                <Button value='±' className='function' onClick={this.handleInput}/>
                <Button value='%' className='function' onClick={this.handleInput}/>
                <Button value='/' className='operation' onClick={this.handleInput}/>
                <Button value='7' onClick={this.handleInput}/>
                <Button value='8' onClick={this.handleInput}/>
                <Button value='9' onClick={this.handleInput}/>
                <Button value='*' className='operation' onClick={this.handleInput}/>
                <Button value='4' onClick={this.handleInput}/>
                <Button value='5' onClick={this.handleInput}/>
                <Button value='6' onClick={this.handleInput}/>
                <Button value='-' className='operation' onClick={this.handleInput}/>
                <Button value='1' onClick={this.handleInput}/>
                <Button value='2' onClick={this.handleInput}/>
                <Button value='3' onClick={this.handleInput}/>
                <Button value='+' className='operation' onClick={this.handleInput}/>
                <Button id='zero' value='0' onClick={this.handleInput}/>
                <Button value='.' onClick={this.handleInput}/>
                <Button value='=' className='operation' onClick={this.handleInput}/>
            </div>
        );
    }
}

export default Keypad