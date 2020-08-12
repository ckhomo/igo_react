import { combineReducers } from "redux";
import boardSize from "./boardSize";
import boardPosition from "./boardPosition";
import playerTurn from "./playerTurn";

//redux-undo:
import undoable from "redux-undo";
import { UNDO_POSITION, REDO_POSITION } from "../actions";

const rootReducer = combineReducers({
  boardSize: boardSize,
  playerTurn: playerTurn,
  boardPosition: undoable(boardPosition, {
    // filter: includeAction([ADD_POSITION]),
    debug: true,
    undoType: UNDO_POSITION,
    redoType: REDO_POSITION,
  }),
});

export default rootReducer;
