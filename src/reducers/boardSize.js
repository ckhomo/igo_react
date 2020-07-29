import { SET_BOARD_SIZE } from "../actions";

export default function boardSize(state: 9 | 13 | 19 = 13, action: Object) {
  console.log(action.payload);
  switch (action.type) {
    case SET_BOARD_SIZE: {
      return {
        boardSize: action.payload,
      };
    }

    default:
      return state;
  }
}
