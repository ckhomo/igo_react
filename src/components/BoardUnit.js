import React /*, { useState }*/ from "react";
import "./BoardUnit.scss";

import Col from "react-bootstrap/Col";
import blackGO from "../resource/black-circle.png";
import whiteGO from "../resource/white-circle.png";

import { changePlayerTurn, addBoardPosition } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function BoardUnit(props) {
  const { changePlayerTurn, addBoardPosition } = props;
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
            event.target.style.background = "";
            addBoardPosition({
              x: props.pos.x,
              y: props.pos.y,
              status: props.playerTurn,
            });
            changePlayerTurn(props.playerTurn === 1 ? -1 : 1);
          }
        }}
        //onMouseOver&Leave: change style
        onMouseOver={(event) => {
          if (props.status === 0) {
            event.target.style.cursor = "pointer";
            event.target.style.background =
              "radial-gradient(circle, grey 10%, lightgrey 75%)";
          }
        }}
        onMouseLeave={(event) => {
          if (props.status === 0) {
            event.target.style.cursor = "";
            event.target.style.background = "";
          }
        }}
      />
    </>
  );
}
const mapStateToProps = (store) => ({
  playerTurn: store.playerTurn,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changePlayerTurn, addBoardPosition }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoardUnit);
