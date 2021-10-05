import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Game from './Game';

export default class Square extends React.Component {
    render() {
        return (
                <button 
                    className="square"
                    onClick={this.props.onClick}>
                    {this.props.value}
                
                </button>
                );
    }
}
