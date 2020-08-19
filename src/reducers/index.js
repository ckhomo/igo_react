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
  LOAD_HISTORY_FILE,
  JUMP_TO_POSITION,
} from "../actions";

const middleReducer = combineReducers({
  boardSize: boardSize,
  playerTurn: playerTurn,
  boardPosition: undoable(boardPosition, {
    // debug: true,
    filter: includeAction(ADD_POSITION),
    // groupBy: groupByActionTypes([ADD_POSITION, DEL_POSITION]),
    undoType: UNDO_POSITION,
    redoType: REDO_POSITION,
    jumpType: JUMP_TO_POSITION,
    clearHistoryType: CLEAR_POSITION_HISTORY,
    // initTypes: ["@@redux-undo/LOAD_BOARD_FILE"],
  }),
});

//讀入檔案: 覆寫整個store
const rootReducer = (state: Object, action) => {
  switch (action.type) {
    case LOAD_HISTORY_FILE:
      state = action.payload;
      break;
    default:
      break;
  }
  return middleReducer(state, action);
};

export default rootReducer;
