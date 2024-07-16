import { useState } from "react";

/**
 * 참고:
 *  React에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고, 
 *  이벤트를 처리하는 함수를 정의 할 때는 handleSomething과 같은 이름을 사용합니다. 
 */ 

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) { 
    // 이미 클릭된 버튼이거나 이미 승부가 났으면 리턴
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice(); // React에서 상태를 업데이트할 때는 불변성(Immutability)을 유지하는 것이 중요합니다.
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares); // 이를 통해 React는 상태가 변경되었음을 감지하고 UI를 업데이트할 수 있습니다.
    setXIsNext(!xIsNext);

    // const winner = calculateWinner(squares);
    // let status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");
    const winner = calculateWinner(squares);
    // const status = 'a';
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    // }
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // squares[a] 가 null이라면 아직 조건이 충족되지 않은 것
    // b와 c까지 널 체크를 안해도 된다. 셋 중 하나만 하면 됨
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}