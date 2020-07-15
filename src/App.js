import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./components/Board";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <Board size={9}/>
      <Panel />
    </>
  );
}

export default App;
