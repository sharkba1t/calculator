import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberInput: []
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        const number = this.props.value;
        this.props.onClick(number);
      }

    render(){
        return (
            <button type='button' 
            className={this.props.className}
            id={this.props.id} 
            onClick={this.handleInput}
            value={this.props.value}
            >{this.props.value}</button>
        );
    }
}

export default Button;