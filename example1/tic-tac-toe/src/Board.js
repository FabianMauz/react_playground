import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            image:null
        };
        
        
    }

    
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            xxx={() => this.handleClick(i)}
            />;
    }

    

    handleClick(i) {
        const won = this.calculateWinner();
        const squares = this.state.squares.slice();
        if (squares[i] == null && !won) {
            squares[i] = this.state.xIsNext ? 'X' : 'O';

            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext});
        }
    }
    fetchImageData = async () => {
        const response = await fetch("https://picsum.photos/id/237/info");
        const data = await response.json();
        this.state.image=data;
     };

    render() {
        const winner = this.calculateWinner();
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        

        return (
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                    <div>
                        <button onClick={() => this.fetchImageData()}>Hier klicken</button>
                        
                    </div>
                </div>
                );
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
                return this.state.squares[a];
            }
        }
        return null;
    }


    
}

