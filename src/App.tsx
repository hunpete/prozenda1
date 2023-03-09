import React from "react";
import styled from "styled-components";
import SearchPage from "./pages/search/SearchPage";

const AppStyle = styled("div")({
  backgroundColor: "#F6F4F3",
  margin: 0,
  padding: 0,
  width: "100vw",
  minWidth: 350,
  minHeight: "100vh",
});

function App() {
  return (
    <AppStyle>
      <div className="App">
        <SearchPage />
      </div>
    </AppStyle>
  );
}

export default App;
