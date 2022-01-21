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
        const name = this.props.value;
        this.props.onClick(name);
      }

    render(){
        return (
            <button type='button' id={this.props.id} className={this.props.className} onClick={this.handleInput}
            value={this.props.value}
            >{this.props.value}</button>
        );
    }
}

export default Button;