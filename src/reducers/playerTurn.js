import { CHANGE_TURN } from "../actions";
import { INIT_TURN } from "../utils/config";

export default function playerTurn(state: 1 | -1 = INIT_TURN, action) {
  switch (action.type) {
    case CHANGE_TURN:
      return action.payload;
    default:
      return state;
  }
}
