export const CHANGE_TURN = "CHANGE_TURN";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const INIT_POSITION = "INIT_POSITION";
export const MODIFY_POSITION = "MODIFY_POSITION";
// export const DEL_POSITION = "DEL_POSITION";

//redux-undo:
export const UNDO_POSITION = "UNDO_POSITION";
export const REDO_POSITION = "REDO_POSITION";

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
export function modifyBoardPosition(payload: Object) {
  return {
    type: MODIFY_POSITION,
    payload,
  };
}
// export function delBoardPosition(payload: Array) {
//   return {
//     type: DEL_POSITION,
//     payload,
//   };
// }

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
