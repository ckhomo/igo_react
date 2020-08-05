import React /*, { useState }*/ from "react";
import "./BoardUnit.scss";

import Col from "react-bootstrap/Col";
import blackGO from "../resource/black-circle.png";
import whiteGO from "../resource/white-circle.png";

import { changePlayerTurn, addBoardPosition } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleEat } from "../utils";

function BoardUnit(props) {
  const { changePlayerTurn, addBoardPosition } = props;

  function clearStyle(event) {
    event.target.style.cursor = "";
    event.target.style.background = "";
  }
  return (
    <>
      <Col
        className={"board-col"}
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
          if (props.status === 0) {
            let currentCoord = {
              x: props.pos.x,
              y: props.pos.y,
              status: props.playerTurn,
            };
            clearStyle(event);
            addBoardPosition(currentCoord);
            let delArray = handleEat(props.boardPosition ,currentCoord);
            console.log(delArray);
            //delBoardPosition(delArray);
            changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
          }
        }}
        //onMouseOver&Leave: change style
        onMouseOver={(event) => {
          if (props.status === 0) {
            event.target.style.cursor = "pointer";
            event.target.style.background = `radial-gradient(circle, ${
              props.playerTurn > 0 ? "black" : "white"
            } 20%, lightgrey 75%)`;
          }
        }}
        onMouseLeave={(event) => {
          if (props.status === 0) {
            clearStyle(event);
          }
        }}
      />
    </>
  );
}
const mapStateToProps = (store) => ({
  playerTurn: store.playerTurn,
  boardPosition: store.boardPosition,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changePlayerTurn, addBoardPosition }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoardUnit);
