// App.js
import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import GlobalStyle from "./globalStyle";
const AppWrapper = styled.div`
  background-color: #fafafa;
`;
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    </Fragment>
  );
}
export default App;
