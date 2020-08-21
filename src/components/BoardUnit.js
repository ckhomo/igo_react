import React, { useEffect, useState } from "react";
import "./BoardUnit.scss";

import Col from "react-bootstrap/Col";
import blackGO from "../resource/black-circle.png";
import whiteGO from "../resource/white-circle.png";
import { handleEat, handleForbid } from "../utils";

import {
  changePlayerTurn,
  addBoardPosition,
  delBoardPosition,
} from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function BoardUnit(props) {
  const { changePlayerTurn, addBoardPosition, delBoardPosition } = props;
  const [Forbid, setForbid] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  //檢查該"空格"是否能被寫入&提子預判:
  useEffect(() => {
    if (props.status === 0) {
      // console.log("LAGPOINT");
      let predictBoard = props.boardPosition;
      let predictCoord = {
        x: props.pos.x,
        y: props.pos.y,
        status: props.playerTurn,
      };
      predictBoard[props.pos.x][props.pos.y] = props.playerTurn;
      let delArray = handleEat(predictBoard, predictCoord);
      if (delArray.length > 0) {
        setToDelete(delArray);
        setForbid(false);
      } else {
        setToDelete(null);
        setForbid(handleForbid(predictBoard, predictCoord));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.boardPosition, props.playerTurn, props.status]);

  function clearStyle(event) {
    event.target.style.cursor = "";
    event.target.style.background = "";
  }
  return (
    <>
      <Col
        className={`board-col`}
        id={`x_${props.pos.x},y_${props.pos.y}`}
        style={
          props.status === 1
            ? { backgroundImage: `url(${blackGO})` }
            : props.status === -1
            ? { backgroundImage: `url(${whiteGO})` }
            : {}
        }
        //onClick: send data
        onClick={(event) => {
          if (props.status === 0 && !Forbid) {
            let currentCoord = {
              x: props.pos.x,
              y: props.pos.y,
              status: props.playerTurn,
              //TODO: 加減分開做(不能影響undo)
              // del: toDelete,
            };
            clearStyle(event);
            if (toDelete) {
              delBoardPosition(toDelete);
            }
            addBoardPosition(currentCoord);
            changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
          }
        }}
        //onMouseOver&Leave: change style
        onMouseOver={(event) => {
          if (props.status === 0 && !Forbid) {
            event.target.style.cursor = "pointer";
            event.target.style.background = `radial-gradient(circle, ${
              props.playerTurn > 0 ? "black" : "white"
            } 20%, lightgrey 75%)`;
          }
        }}
        onMouseLeave={(event) => {
          if (props.status === 0 && !Forbid) {
            clearStyle(event);
          }
        }}
      >
        {props.dotted ? <div className="dotted-unit" /> : null}
      </Col>
    </>
  );
}
const mapStateToProps = (store) => ({
  playerTurn: store.playerTurn,
  boardPosition: JSON.parse(store.boardPosition.present),
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { changePlayerTurn, addBoardPosition, delBoardPosition },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BoardUnit);
