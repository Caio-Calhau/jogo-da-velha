import { styled } from "styled-components";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: #6c6c6c;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Square = styled.div`
  display: flex;

  width: 150px;
  height: 150px;

  align-items: center;
  justify-content: center;

  border: 1px solid black;
`;

export const Title = styled.h1`
  display: flex;

  font-size: 32px;
`;

export const PlayerX = styled.p`
  display: flex;

  font-size: 20px;
`;
