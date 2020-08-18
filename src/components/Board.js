import React /*, { useEffect } */ from "react";
import "./Board.scss";

import BoardUnit from "./BoardUnit.js";
import { DOTPOS_9, DOTPOS_13, DOTPOS_19 } from "../utils/config";

import Row from "react-bootstrap/Row";

import { connect } from "react-redux";

function Board(props) {
  //指定unit上畫上黑點:
  let dottedList = [];
  switch (props.boardSize) {
    case 9:
      dottedList = DOTPOS_9;
      break;
    case 13:
      dottedList = DOTPOS_13;
      break;
    case 19:
      dottedList = DOTPOS_19;
      break;
    default:
      break;
  }
  //Draw the board:
  let boardRow = [];
  for (var coord_y = props.boardSize - 1; coord_y >= 0; coord_y--) {
    let boardCol = [];
    for (var coord_x = 0; coord_x < props.boardSize; coord_x++) {
      boardCol.push(
        <BoardUnit
          key={`col_${coord_x}`}
          pos={{ x: coord_x, y: coord_y }}
          dotted={
            // eslint-disable-next-line no-loop-func
            dottedList.findIndex((el) => {
              return el[0] === coord_x && el[1] === coord_y;
            }) !== -1
              ? true
              : false
          }
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
