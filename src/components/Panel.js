import React, { useState, useEffect } from "react";
import "./Panel.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
  setFileName,
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
    setFileName,
  } = props;
  const [FileLabel, setFileLabel] = useState("Select file:");
  const [SizeLabel, setSizeLabel] = useState("Board size:");
  const [writeName, setWriteName] = useState("");
  const [jumpOptions, setJumpOptions] = useState([]);
  useEffect(() => {
    let optArray = [];
    for (let index = 0; index < props.HistoryLength - 1; index++) {
      optArray.push(<option key={`jumpto_${index + 1}`}>{index + 1}</option>);
    }
    setJumpOptions(optArray);
  }, [props.HistoryLength]);
  function doInit(boardSize: Number = props.boardSize) {
    //設定棋盤尺寸&重置:
    initBoardPosition(parseInt(boardSize));
    clearPositionHistory();
    changePlayerTurn(1);
    setFileLabel("Select file:");
    // setSizeLabel("Board size:");
    setWriteName("");
  }
  return (
    <>
      <Form className="board-panel">
        <Form.Group controlId="board-size">
          <Row>
            <Col xs={8}>
              <Form.Control
                as="select"
                value={SizeLabel}
                onChange={(event) => {
                  setBoardSize(parseInt(event.target.value));
                  doInit(event.target.value);
                }}
              >
                <option value={"Board size:"} disabled>
                  Board Size:
                </option>
                <option value={9}>9</option>
                <option value={13}>13</option>
                <option value={19}>19</option>
              </Form.Control>
            </Col>
            <Col xs={4}>
              <Button
                variant="success"
                className="panel-btn"
                onClick={() => doInit()}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="undo-redo">
          <Row>
            <Col xs={3}>
              <Button
                className="panel-btn"
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
                className="panel-btn"
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
                placeholder={`Enter filename:`}
                value={writeName}
                //暫存至state
                onChange={(e) => setWriteName(e.target.value)}
                //儲存至redux
                onBlur={(e) => setFileName(e.target.value)}
              />
            </Col>
            <Col xs={4}>
              <Button
                className="panel-btn"
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(props.duelLog)
                )}`}
                download={`${props.fileName}.json`}
                onClick={() => setWriteName("")}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="load-file">
          <Row>
            <Col xs={12}>
              <Form.File
                custom
                label={FileLabel}
                id="fileloader"
                onChange={(e) => {
                  if (e.target.files.length) {
                    //檔名顯示:
                    let labelString = e.target.files[0].name.toString();
                    if (labelString.slice(-5, labelString.length) === ".json") {
                      labelString = labelString.slice(0, -5);
                    }
                    if (labelString.length > 10) {
                      labelString = labelString.slice(0, 10) + "...";
                    }
                    setFileLabel(`${labelString}`);

                    //TODO: validate file
                    const reader = new FileReader();
                    reader.readAsText(e.target.files[0]);
                    reader.addEventListener("load", () => {
                      let newStore = JSON.parse(reader.result);
                      loadHistoryFile(newStore);
                      setSizeLabel(newStore.boardSize);
                    });
                  }
                }}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </>
  );
}

const mapStateToProps = (store) => ({
  duelLog: store,
  fileName: store.fileName,
  boardSize: store.boardSize,
  playerTurn: store.playerTurn,
  canUndo: store.boardPosition.past.length > 0,
  canRedo: store.boardPosition.future.length > 0,
  //判斷轉跳位置:
  HistoryLength: store.boardPosition.limit,
  CurrentIndex: store.boardPosition.index,
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
      setFileName,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
