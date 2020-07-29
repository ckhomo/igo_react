import { INIT_POSITION, ADD_POSITION, DEL_POSITION } from "../actions";
let boardInitStatus = {
  0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

export default function boardPosition(
  state: Object = boardInitStatus,
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
