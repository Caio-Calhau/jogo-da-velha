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

  font-size: 40px;

  align-items: center;
  justify-content: center;

  border: 1px solid black;
`;

export const Header = styled.div`
  height: 200px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

export const Players = styled.div`
  display: flex;

  padding-top: 50px;

  width: 100vw;

  justify-content: space-between;
`;

export const PlayerX = styled.p`
  font-size: 25px;
  padding-left: 150px;
`;

export const PlayerO = styled.p`
  font-size: 25px;
  padding-right: 150px;
`;

export const Score = styled.div`
  display: flex;

  padding-top: 200px;

  width: 100vw;

  justify-content: space-between;
`;

export const Counter = styled.p`
  display: flex;
  font-size: 150px;

  justify-content: center;

  padding: 0px 150px 0px 150px;
`;
