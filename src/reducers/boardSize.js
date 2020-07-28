// @flow
import { SET_BOARD_SIZE } from "../actions";
const boardInitStatus = {
  0: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  1: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  2: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  3: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  4: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  5: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  6: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  7: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  8: [
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
    { status: 0 },
  ],
  details: {
    whoseTurn: 1,
    turnNumber: 0,
    blackEat: 0,
    whiteEat: 0,
  },
};
export default function boardSize(
  state: { size: 9 | 13 | 19 } = { size: 13 },
  action: Object
) {
  console.log(state, action.payload)
  switch (action.type) {
    case SET_BOARD_SIZE: {
      // console.log(state);
      // return state;
      return Object.assign({}, { boardSize: action.payload.size });
      // return { boardSize: action.payload.size };
    }

    default:
      return state;
  }
}