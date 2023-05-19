import React, { useEffect, useState } from "react";
import {
  Screen,
  Table,
  Square,
  Body,
  Title,
  Counter,
  Player,
  Sides,
  Header,
  ContentTable,
} from "./Components/TableStyles";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [players, setPlayers] = useState({ X: 0, O: 0 });
  const [status, setStatus] = useState("Vez do jogador: " + (xIsNext ? "X" : "O"));

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

  useEffect(() => {
    setStatus("Vez do jogador: " + (xIsNext ? "X" : "O"));
  }, [xIsNext]);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setStatus("Vencedor: " + winner);
      const lastPlayers = players;
      lastPlayers[winner] = ++lastPlayers[winner];
      setPlayers(lastPlayers);
    }
  }, [squares]);

  return (
    <>
      <Screen>
        <Header>
          <Title>Jogo da Velha</Title>
        </Header>
        <Body>
          <Sides>
            <Player isActive={xIsNext}>Jogador "X"</Player>
            <Counter>{players.X}</Counter>
          </Sides>
          <ContentTable>
            <Table>
              <Square onClick={() => handleClick(0)}>{squares[0]}</Square>
              <Square onClick={() => handleClick(1)}>{squares[1]}</Square>
              <Square onClick={() => handleClick(2)}>{squares[2]}</Square>
            </Table>
            <Table>
              <Square onClick={() => handleClick(3)}>{squares[3]}</Square>
              <Square onClick={() => handleClick(4)}>{squares[4]}</Square>
              <Square onClick={() => handleClick(5)}>{squares[5]}</Square>
            </Table>
            <Table>
              <Square onClick={() => handleClick(6)}>{squares[6]}</Square>
              <Square onClick={() => handleClick(7)}>{squares[7]}</Square>
              <Square onClick={() => handleClick(8)}>{squares[8]}</Square>
            </Table>
          </ContentTable>
          <Sides>
            <Player isActive={!xIsNext}>Jogador "O"</Player>
            <Counter>{players.O}</Counter>
          </Sides>
        </Body>
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
