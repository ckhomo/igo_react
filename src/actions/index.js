export const CHANGE_TURN = "CHANGE_TURN";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const INIT_POSITION = "INIT_POSITION";
export const ADD_POSITION = "ADD_POSITION";
export const DEL_POSITION = "DEL_POSITION";
export const LOAD_HISTORY_FILE = "LOAD_HISTORY_FILE";
export const SET_FILE_NAME = "SET_FILE_NAME";
//user Preference:(不應存入記錄檔)
export const TOGGLE_ORDER = "TOGGLE_ORDER";
export const TOGGLE_DARK = "TOGGLE_DARK";
export const SWITCH_LANG = "SWITCH_LANG";
//VSCode Emoji: WIN + .
//redux-undo:
export const UNDO_POSITION = "UNDO_POSITION";
export const REDO_POSITION = "REDO_POSITION";
export const JUMP_TO_POSITION = "JUMP_TO_POSITION";
export const CLEAR_POSITION_HISTORY = "CLEAR_POSITION_HISTORY";

export function changePlayerTurn(payload: 1 | -1) {
  return {
    type: CHANGE_TURN,
    payload,
  };
}
export function setBoardSize(payload: 9 | 13 | 19) {
  return {
    type: SET_BOARD_SIZE,
    payload,
  };
}
export function initBoardPosition(payload: 9 | 13 | 19) {
  return {
    type: INIT_POSITION,
    payload,
  };
}
export function addBoardPosition(payload: Object) {
  return {
    type: ADD_POSITION,
    payload,
  };
}
export function delBoardPosition(payload: Array) {
  return {
    type: DEL_POSITION,
    payload,
  };
}
//讀入檔案: 覆寫整個store
export function loadHistoryFile(payload: Object) {
  return {
    type: LOAD_HISTORY_FILE,
    payload,
  };
}
export function setFileName(payload: String) {
  return {
    type: SET_FILE_NAME,
    payload,
  };
}

//redux-undo:
export function undoPosition() {
  return {
    type: UNDO_POSITION,
  };
}
export function redoPosition() {
  return {
    type: REDO_POSITION,
  };
}
export function clearPositionHistory() {
  return {
    type: CLEAR_POSITION_HISTORY,
  };
}
//跳至特定手數:
export function jumpPosition(index: Number) {
  return {
    type: JUMP_TO_POSITION,
    //redux-undo: 固定名稱index
    index,
  };
}
