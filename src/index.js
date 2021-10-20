import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import SignupForm from "./SignupForm";
import GlobalStyle from "./GlobalStyle";

const dummyFeedItem = {
  title: "Create a new account. ",
  body: " Enter your details. Join for free "
};

const Container = styled.div`
  display: block;
  width: 80%;
  max-width: 30em
  min-width: 10em;
  margin: 60%;
  margin: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SignupForm feedItem={dummyFeedItem} />
      </Container>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
