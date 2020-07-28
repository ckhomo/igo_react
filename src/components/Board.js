import React from "react";
import "./Board.scss";

import BoardUnit from "./BoardUnit.js";

import Row from "react-bootstrap/Row";

import { connect } from "react-redux";

function Board(boardSize) {
  console.log(boardSize);
  //Draw the board:
  let boardRow = [];
  for (var coord_y = boardSize - 1; coord_y >= 0; coord_y--) {
    let boardCol = [];
    for (var coord_x = 0; coord_x < boardSize; coord_x++) {
      boardCol.push(
        <BoardUnit
          key={`col_${coord_x}`}
          pos={{ x: coord_x, y: coord_y }}
          status={0}
          // status={props.data[coord_x][coord_y].status}
        />
      );
    }
    boardRow.push(
      <Row
        className={"board-row"}
        key={`row_${coord_y}`}
        style={{ width: 36 * boardSize }}
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

export default connect()(Board);
