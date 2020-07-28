import React, { useState } from "react";
import "./BoardUnit.scss";

import Col from "react-bootstrap/Col";
import blackGO from "../resource/black-circle.png";
import whiteGO from "../resource/white-circle.png";

function BoardUnit(props) {
  const [GOImg, setGOImg] = useState(
    props.status === 1
      ? { backgroundImage: `url(${blackGO})` }
      : props.status === -1
      ? { backgroundImage: `url(${whiteGO})` }
      : {}
  );

  return (
    <>
      <Col
        className={"board-col"}
        id={`x_${props.pos.x},y_${props.pos.y}`}
        style={GOImg}
        //onClick: send data
        onClick={(event) => {
          if (props.status === 0) {
            event.target.style.cursor = "";
            event.target.style.background = "";
            setGOImg({ backgroundImage: `url(${blackGO})` });
          }
        }}
        //onMouseOver&Leave: change style
        onMouseOver={(event) => {
          if (props.status === 0 && !GOImg.backgroundImage) {
            event.target.style.cursor = "pointer";
            event.target.style.background =
              "radial-gradient(circle, grey 10%, lightgrey 75%)";
          }
        }}
        onMouseLeave={(event) => {
          if (props.status === 0 && !GOImg.backgroundImage) {
            event.target.style.cursor = "";
            event.target.style.background = "";
          }
        }}
      />
    </>
  );
}

export default BoardUnit;
