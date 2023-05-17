import React from "react";
import {
  Screen,
  Table,
  Square,
  Header,
  Title,
  PlayerX,
  PlayerO,
  Players,
} from "./Components/TableStyles";

function App() {
  return (
    <>
      <Screen>
        <Header>
          <Title>Jogo da Velha</Title>
          <Players>
            <PlayerX>Jogador X</PlayerX>
            <PlayerO>Jogador O</PlayerO>
          </Players>
        </Header>
        <Table>
          <Square>X</Square>
          <Square>O</Square>
          <Square>X</Square>
        </Table>
        <Table>
          <Square>O</Square>
          <Square>X</Square>
          <Square>O</Square>
        </Table>
        <Table>
          <Square>X</Square>
          <Square>O</Square>
          <Square>X</Square>
        </Table>
      </Screen>
    </>
  );
}

export default App;
