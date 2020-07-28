import React, { useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Board from "./components/Board";
import Panel from "./components/Panel";

// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { onSetBoardSize } from "./actions";

function App(props) {
  // useEffect(() => {
  //   onSetBoardSize({ size: 9 });
  // }, []);
  return (
    <>
      <Board />
      <Panel />
    </>
  );
}

const mapStateToProps = (store) => ({
  // items: store.items,
  // isFilteringOut: store.filterOut.isFilteringOut,
  // searchedKeyword: store.searchedKeyword.keyword,
  size: store.size,
});

export default connect(mapStateToProps)(App);
