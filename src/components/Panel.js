import React from "react";
import "./Panel.scss";

import Form from "react-bootstrap/Form";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setBoardSize } from "../actions";

function Panel(props) {
  const { setBoardSize } = props;
  return (
    <>
      <Form className="board-panel">
        <Form.Group controlId="board-size">
          <Form.Label>Board Size:</Form.Label>
          <Form.Control
            as="select"
            defaultValue={props.boardSize}
            onChange={(event) => {
              setBoardSize(parseInt(event.target.value));
            }}
          >
            <option value={9}>9</option>
            <option value={13}>13</option>
            <option value={19}>19</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

const mapStateToProps = (store) => ({
  boardSize: store.boardSize,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setBoardSize }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
