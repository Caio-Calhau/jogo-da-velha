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
  Restart,
  Center,
} from "./Components/TableStyles";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [players, setPlayers] = useState({ X: 0, O: 0 });
  const [status, setStatus] = useState("Vez do jogador: " + (xIsNext ? "X" : "O"));
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);

  function handleClick(i) {
    if (isGameOver || squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsGameOver(false);
    setXIsNext(true);
    setStatus("Vez do jogador: X");
    setWinningSquares([]);
  }

  useEffect(() => {
    setStatus("Vez do jogador: " + (xIsNext ? "X" : "O"));
  }, [xIsNext]);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setIsGameOver(true);
      setStatus("Vencedor: jogador " + winner);
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        [winner]: prevPlayers[winner] + 1,
      }));
      setWinningSquares(calculateWinningSquares(squares));
    } else if (!squares.includes(null)) {
      setIsGameOver(true);
      setStatus("Empate");
    }
  }, [squares]);

  return (
    <>
      <Screen>
        <Header>
          <Title>Jogo da Velha</Title>
          {isGameOver && <Restart>{status}</Restart>}
        </Header>
        <Body>
          <Sides>
            <Player isActive={xIsNext}>Jogador "X"</Player>
            <Counter>{players.X}</Counter>
          </Sides>
          <Center>
            <ContentTable>
              {Array(3)
                .fill(null)
                .map((_, row) => (
                  <Table key={row}>
                    {Array(3)
                      .fill(null)
                      .map((_, col) => {
                        const index = row * 3 + col;
                        return (
                          <Square
                            key={index}
                            onClick={() => handleClick(index)}
                            isWinner={winningSquares.includes(index)}>
                            {squares[index]}
                          </Square>
                        );
                      })}
                  </Table>
                ))}
            </ContentTable>
            {isGameOver && <Restart onClick={handleReset}>Jogar de novo?</Restart>}
          </Center>
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

function calculateWinningSquares(squares) {
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
      return [a, b, c];
    }
  }
  return [];
}

export default App;
