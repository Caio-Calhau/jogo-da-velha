import React from "react";
import { Screen, Table, Square, Title, PlayerX } from "./Components/TableStyles";

function App() {
  return (
    <>
      <Screen>
        <Title>Jogo da Velha</Title>
        <PlayerX>Jogador X</PlayerX>
        <div>Jogador O</div>
        <div>Placar</div>
        <Table>
          <Square>1</Square>
          <Square>2</Square>
          <Square>3</Square>
        </Table>
        <Table>
          <Square>4</Square>
          <Square>5</Square>
          <Square>6</Square>
        </Table>
        <Table>
          <Square>7</Square>
          <Square>8</Square>
          <Square>9</Square>
        </Table>
      </Screen>
    </>
  );
}

export default App;
