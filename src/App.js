import React /*, { useEffect }*/ from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./components/Board";
import Panel from "./components/Panel";

import { connect } from "react-redux";

function App() {
  return (
    <>
      <Board />
      <Panel />
    </>
  );
}

export default connect()(App);
