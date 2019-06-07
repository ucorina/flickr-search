import React from "react";
import "./App.css";
import SearchBox from "./containers/SearchBox";
import PhotosList from "./containers/PhotosList";
import LoadMoreButton from "./containers/LoadMoreButton";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="App">
      <Title>Flickr Photo search</Title>
      <SearchBox />
      <PhotosList />
      <LoadMoreButton />
    </div>
  );
}

export default App;
