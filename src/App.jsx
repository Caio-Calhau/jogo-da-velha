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

function App() {
  const [value, setValue] = useState("");

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
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
        </Table>
        <Table>
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
        </Table>
        <Table>
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
          <Square onClick={() => setValue("X")}>{value}</Square>
        </Table>
      </Screen>
    </>
  );
}

export default App;
