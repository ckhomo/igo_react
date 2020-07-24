import React from "react";
import "./Board.scss";

// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Board(props) {
  //Draw the board:
  let boardCol = [];
  for (var i = 0; i < props.size; i++) {
    boardCol.push(
      <Col className={"board-col"} key={"board-col" + i} id={"x_" + i} />
    );
  }
  let boardRow = [];
  for (var j = 0; j < props.size; j++) {
    boardRow.push(
      <Row
        className={"board-row"}
        id={"y_" + j}
        key={"board-row" + j}
        style={{ width: 36 * props.size }}
        //onclick: Get coordinate value
        onClick={(event) => {
          console.log(event.target.id, event.target.parentElement.id);
        }}
      >
        {boardCol}
      </Row>
    );
  }

  // console.log(boardRow);
  return (
    <>
      <div className="board-div">{boardRow}</div>
    </>
  );
}

export default Board;
