import React from "react";
import "./Panel.scss";

import Form from "react-bootstrap/Form";

function Panel() {
  return (
    <>
      <Form className="board-panel">
        <Form.Group controlId="board-size">
          <Form.Label>Board Size:</Form.Label>
          <Form.Control as="select" defaultValue={13}>
            <option value={9}>9</option>
            <option value={13}>13</option>
            <option value={19}>19</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

export default Panel;
