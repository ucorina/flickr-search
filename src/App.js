import React from "react";
import "./App.css";
import SearchBox from "./containers/SearchBox";
import PhotosList from "./containers/PhotosList";

function App() {
  return (
    <div className="App">
      <SearchBox />
      <PhotosList />
    </div>
  );
}

export default App;
