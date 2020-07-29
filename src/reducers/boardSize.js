import { SET_BOARD_SIZE } from "../actions";
import { INIT_SIZE } from "../utils/config";

export default function boardSize(
  state: 9 | 13 | 19 = INIT_SIZE,
  action: Object
) {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return action.payload;

    default:
      return state;
  }
}
