import { INIT_POSITION, ADD_POSITION, DEL_POSITION } from "../actions";
import { INIT_SIZE } from "../utils/config";

const boardInitStatus = () => {
  let status_col = [];
  let status = {};
  for (var i = 0; i < INIT_SIZE; i++) {
    status_col.push(0);
  }
  for (var j = 0; j < INIT_SIZE; j++) {
    status[j] = [...status_col];
  }
  // status[3][3] = 1;
  return status;
};

export default function boardPosition(
  state: Object = boardInitStatus(),
  action: Object
) {
  //   console.log(state, action);
  switch (action.type) {
    case INIT_POSITION:
      return state;

    default:
      return state;
  }
}
