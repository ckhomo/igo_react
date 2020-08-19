import React, { useState, useEffect } from "react";
import "./Panel.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setBoardSize,
  initBoardPosition,
  redoPosition,
  undoPosition,
  jumpPosition,
  changePlayerTurn,
  clearPositionHistory,
  loadHistoryFile,
} from "../actions";

function Panel(props) {
  const {
    setBoardSize,
    initBoardPosition,
    redoPosition,
    undoPosition,
    jumpPosition,
    changePlayerTurn,
    clearPositionHistory,
    loadHistoryFile,
  } = props;
  const [FileName, setFileName] = useState("default");
  const [LoadContent, setLoadContent] = useState("");
  const [jumpOptions, setJumpOptions] = useState([]);
  useEffect(() => {
    let optArray = [];
    for (let index = 0; index < props.HistoryLength - 1; index++) {
      optArray.push(<option key={`jumpto_${index + 1}`}>{index + 1}</option>);
    }
    setJumpOptions(optArray);
  }, [props.HistoryLength]);
  return (
    <>
      <Form className="board-panel">
        <Form.Group controlId="board-size">
          <Form.Label>Board Size:</Form.Label>
          <Form.Control
            as="select"
            defaultValue={props.boardSize}
            onChange={(event) => {
              //設定棋盤尺寸&重置:
              initBoardPosition(parseInt(event.target.value));
              setBoardSize(parseInt(event.target.value));
              clearPositionHistory();
              changePlayerTurn(1);
            }}
          >
            <option value={9}>9</option>
            <option value={13}>13</option>
            <option value={19}>19</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="undo-redo">
          <Row>
            <Col xs={3}>
              <Button
                onClick={() => {
                  undoPosition();
                  changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
                }}
                disabled={!props.canUndo}
                // className="panel-btn"
              >
                Undo
              </Button>
            </Col>
            <Col xs={3}>
              <Button
                onClick={() => {
                  redoPosition();
                  changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
                }}
                disabled={!props.canRedo}
                // className="panel-btn"
              >
                Redo
              </Button>
            </Col>
            <Col xs={6}>
              <Form.Control
                as="select"
                defaultValue="Jump to:"
                onChange={(e) => {
                  let jumpWidth = parseInt(e.target.value - props.CurrentIndex);
                  if (jumpWidth % 2) {
                    changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
                  }
                  jumpPosition(jumpWidth);
                }}
              >
                <option disabled>Jump to:</option>
                {jumpOptions}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="write-file">
          <Row>
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder="Enter filename here:"
                onChange={(e) => {
                  setFileName(e.target.value);
                }}
              />
            </Col>
            <Col xs={4}>
              <Button
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(props.duelLog)
                )}`}
                download={`${FileName}.json`}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="load-file">
          <Row>
            <Col xs={8}>
              <Form.File
                id="fileloader"
                onChange={(e) => {
                  //TODO: validate file
                  const reader = new FileReader();
                  reader.readAsText(e.target.files[0]);
                  reader.addEventListener("load", () => {
                    setLoadContent(true);
                    clearPositionHistory(JSON.parse(reader.result));
                    loadHistoryFile(JSON.parse(reader.result));
                  });
                }}
              />
            </Col>
            <Col xs={4}>
              <Button disabled={!LoadContent}>Load</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
}

const mapStateToProps = (store) => ({
  duelLog: store,
  boardSize: store.boardSize,
  playerTurn: store.playerTurn,
  //判斷轉跳位置:
  HistoryLength: store.boardPosition.limit,
  CurrentIndex: store.boardPosition.index,
  //判斷轉跳位置:
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
      jumpPosition,
      changePlayerTurn,
      clearPositionHistory,
      loadHistoryFile,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
