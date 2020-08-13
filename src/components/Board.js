import React /*, { useEffect } */ from "react";
import "./Board.scss";

import BoardUnit from "./BoardUnit.js";

import Row from "react-bootstrap/Row";

import { connect } from "react-redux";

function Board(props) {
  //Draw the board:
  let boardRow = [];
  for (var coord_y = props.boardSize - 1; coord_y >= 0; coord_y--) {
    let boardCol = [];
    for (var coord_x = 0; coord_x < props.boardSize; coord_x++) {
      boardCol.push(
        <BoardUnit
          key={`col_${coord_x}`}
          pos={{ x: coord_x, y: coord_y }}
          // status={0}
          status={props.boardPosition[coord_x][coord_y]}
        />
      );
    }
    boardRow.push(
      <Row
        className={"board-row"}
        key={`row_${coord_y}`}
        style={{ width: 36 * props.boardSize }}
      >
        {boardCol}
      </Row>
    );
  }
  return (
    <>
      <div className="board-div">{boardRow}</div>
    </>
  );
}
const mapStateToProps = (store) => ({
  boardPosition: JSON.parse(store.boardPosition.present),
  boardSize: store.boardSize,
});

export default connect(mapStateToProps)(Board);
