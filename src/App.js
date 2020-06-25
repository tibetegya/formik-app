import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Screen1 from "./Screen1";
// import Tables from "./Tables";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  width: 100%;
  height: 100vh;
`;

export default function App() {
  return (
    <Wrapper className="App">
      <Screen1 />
      {/* <Tables /> */}
      <GlobalStyle />
    </Wrapper>
  );
}
