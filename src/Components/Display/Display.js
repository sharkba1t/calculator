import React from 'react';
import './Display.css';

class Display extends React.Component {

    render(){
        const display = this.props.value;
        return(
            <div className='display'>
                <p>{display} </p>
            </div>
        );
    }
}

export default Display