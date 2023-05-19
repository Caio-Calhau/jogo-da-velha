import { styled } from "styled-components";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100vw;
  height: 100vh;

  background: #6c6c6c;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const ContentTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 610px;
  background-color: black;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  width: 610px;
  background-color: black;
`;

export const Square = styled.div`
  display: flex;

  width: 200px;
  height: 200px;

  font-size: 80px;

  align-items: center;
  justify-content: center;

  background-color: #6c6c6c;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: #a0a0a0;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-around;
  width: 100%;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 70px;
  text-align: center;
`;

export const Sides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30%;
`;

export const Player = styled.p.attrs(({ isActive }) => ({
  style: {
    backgroundColor: isActive ? "black" : "rgba(255, 255, 255, 0)",
    color: isActive ? "#6c6c6c" : "rgba(0, 0, 0, 1)",
  },
}))`
  font-size: 42px;
  padding: 20px;
  border-radius: 5px;
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

export const PlayAgain = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 150px;
  height: 50px;

  border-radius: 10px;

  background: yellow;
`;
