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

function Quadrado() {
  const [value, setValue] = useState(null);

  function clickX() {
    setValue("X");
  }

  function clickO() {
    setValue("O");
  }

  return <Square onClick={clickO}>{value}</Square>;
}

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
          <Score>
            <Counter>0</Counter>
            <Counter>1</Counter>
          </Score>
        </Header>
        <Table>
          <Quadrado />
          <Quadrado />
          <Quadrado />
        </Table>
        <Table>
          <Quadrado />
          <Quadrado />
          <Quadrado />
        </Table>
        <Table>
          <Quadrado />
          <Quadrado />
          <Quadrado />
        </Table>
      </Screen>
    </>
  );
}

export default App;
