import { combineReducers } from "redux";
import boardSize from "./boardSize";
import boardPosition from "./boardPosition";
import playerTurn from "./playerTurn";

//redux-undo:
import undoable, { includeAction } from "redux-undo";
import {
  UNDO_POSITION,
  REDO_POSITION,
  CLEAR_POSITION_HISTORY,
  ADD_POSITION,
} from "../actions";

const rootReducer = combineReducers({
  boardSize: boardSize,
  playerTurn: playerTurn,
  boardPosition: undoable(boardPosition, {
    // debug: true,
    filter: includeAction(ADD_POSITION),
    // groupBy: groupByActionTypes([ADD_POSITION, DEL_POSITION]),
    undoType: UNDO_POSITION,
    redoType: REDO_POSITION,
    clearHistoryType: CLEAR_POSITION_HISTORY,
  }),
});

export default rootReducer;
