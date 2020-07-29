export const CHANGE_PLAYER_TURN = "CHANGE_PLAYER_TURN";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const INIT_POSITION = "INIT_POSITION";
export const ADD_POSITION = "ADD_POSITION";
export const DEL_POSITION = "DEL_POSITION";

// export function changePlayerTurn(player: Boolean) {
//   return (dispatch, getstate) => {
//     dispatch({
//       type: CHANGE_PLAYER_TURN,
//       payload: player,
//     });
//   };
// }

export function setBoardSize(payload: 9 | 13 | 19) {
  return {
    type: SET_BOARD_SIZE,
    payload,
  };
  // return (dispatch) => {
  //   dispatch({ type: SET_BOARD_SIZE, payload });
  // };
}

// export function setInitBoard(positions: Object) {
//   return (dispatch, getstate) => {
//     dispatch({
//       type: SET_INIT_BOARD,
//       payload: positions,
//     });
//   };
// }

// export function addPosition(position = Object) {
//   return (dispatch, getstate) => {
//     dispatch({
//       type: ADD_POSITION,
//       payload: position,
//     });
//   };
// }
// export function delPositions(positions = Object) {
//   return (dispatch, getstate) => {
//     dispatch({
//       type: ADD_POSITION,
//       payload: positions,
//     });
//   };
// }
