export const CHANGE_TURN = "CHANGE_TURN";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const INIT_POSITION = "INIT_POSITION";
export const ADD_POSITION = "ADD_POSITION";
export const DEL_POSITION = "DEL_POSITION";

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
// export function delPositions(positions = Object) {
//   return (dispatch, getstate) => {
//     dispatch({
//       type: ADD_POSITION,
//       payload: positions,
//     });
//   };
// }
