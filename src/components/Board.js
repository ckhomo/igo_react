import React from "react";
import "./Board.scss";

import BoardUnit from "./BoardUnit.js";

import Row from "react-bootstrap/Row";

function Board(props) {
  console.log(props.data.details)
  //Draw the board:
  let boardRow = [];
  for (var coord_y = props.size - 1; coord_y >= 0; coord_y--) {
    let boardCol = [];
    for (var coord_x = 0; coord_x < props.size; coord_x++) {
      boardCol.push(
        <BoardUnit
          key={`col_${coord_x}`}
          pos={{ x: coord_x, y: coord_y }}
          status={props.data[coord_x][coord_y].status}
        />
      );
    }
    boardRow.push(
      <Row
        className={"board-row"}
        key={`row_${coord_y}`}
        style={{ width: 36 * props.size }}
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

export default Board;
