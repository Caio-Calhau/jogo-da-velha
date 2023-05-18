import React, { useState } from "react";
import {
  Screen,
  Table,
  Square,
  Header,
  Title,
  PlayerX,
  PlayerO,
  Players,
  Counter,
  Score,
} from "./Components/TableStyles";

function Quadrado({ value, onSquareClick }) {
  return <Square onClick={onSquareClick}>{value}</Square>;
}

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Vencedor: " + winner;
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <Screen>
        <Header>
          <Title>{status}</Title>
          <Players>
            <PlayerX>Jogador X</PlayerX>
            <PlayerO>Jogador O</PlayerO>
          </Players>
          <Score>
            <Counter>0</Counter>
            <Counter>1</Counter>
          </Score>
        </Header>
        <Table>
          <Quadrado value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Quadrado value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Quadrado value={squares[2]} onSquareClick={() => handleClick(2)} />
        </Table>
        <Table>
          <Quadrado value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Quadrado value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Quadrado value={squares[5]} onSquareClick={() => handleClick(5)} />
        </Table>
        <Table>
          <Quadrado value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Quadrado value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Quadrado value={squares[8]} onSquareClick={() => handleClick(8)} />
        </Table>
      </Screen>
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
