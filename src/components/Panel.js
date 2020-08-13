import React from "react";
import "./Panel.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setBoardSize,
  initBoardPosition,
  redoPosition,
  undoPosition,
  changePlayerTurn,
} from "../actions";

function Panel(props) {
  const {
    setBoardSize,
    initBoardPosition,
    redoPosition,
    undoPosition,
    changePlayerTurn,
  } = props;
  return (
    <>
      <Form className="board-panel">
        <Form.Group controlId="board-size">
          <Form.Label>Board Size:</Form.Label>
          <Form.Control
            as="select"
            defaultValue={props.boardSize}
            onChange={(event) => {
              initBoardPosition(parseInt(event.target.value));
              setBoardSize(parseInt(event.target.value));
            }}
          >
            <option value={9}>9</option>
            <option value={13}>13</option>
            <option value={19}>19</option>
          </Form.Control>
        </Form.Group>
        <Button
          onClick={() => {
            undoPosition();
            changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
          }}
          disabled={!props.canUndo}
          className="panel-btn"
        >
          Undo
        </Button>
        <Button
          onClick={() => {
            redoPosition();
            changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
          }}
          disabled={!props.canRedo}
          className="panel-btn"
        >
          Redo
        </Button>
        {/* <br />
        <span>It's {props.playerTurn > 0 ? "Black" : "White"}'s turn.</span> */}
      </Form>
    </>
  );
}

const mapStateToProps = (store) => ({
  boardSize: store.boardSize,
  playerTurn: store.playerTurn,
  canUndo: store.boardPosition.past.length > 0,
  canRedo: store.boardPosition.future.length > 0,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setBoardSize,
      initBoardPosition,
      redoPosition,
      undoPosition,
      changePlayerTurn,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
