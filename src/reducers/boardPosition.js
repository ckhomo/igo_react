import { INIT_POSITION, ADD_POSITION /*, DEL_POSITION*/ } from "../actions";
import { INIT_SIZE } from "../utils/config";

//Creat initial board.
const boardInitStatus = (size = INIT_SIZE) => {
  let status_col = [];
  let status = {};
  for (var i = 0; i < size; i++) {
    status_col.push(0);
  }
  for (var j = 0; j < size; j++) {
    status[j] = [...status_col];
  }
  return status;
};

export default function boardPosition(
  state: Object = boardInitStatus(),
  action
) {
  switch (action.type) {
    case INIT_POSITION:
      return boardInitStatus(action.payload);

    case ADD_POSITION:
      let clone_state = { ...state };
      clone_state[action.payload.x][action.payload.y] = action.payload.status;
      return clone_state;
    // case DEL_POSITION:
    //   return state;
    default:
      return state;
  }
}
