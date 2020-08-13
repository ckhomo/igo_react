import { INIT_POSITION, MODIFY_POSITION /*, DEL_POSITION*/ } from "../actions";
import { INIT_SIZE } from "../utils/config";
import { handleEat } from "../utils";

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
  return JSON.stringify(status);
};

export default function boardPosition(
  state: String = boardInitStatus(),
  action
) {
  switch (action.type) {
    case INIT_POSITION:
      return boardInitStatus(action.payload);
    //for GO:
    case MODIFY_POSITION:
      let stateADD = JSON.parse(state);
      stateADD[action.payload.x][action.payload.y] = action.payload.status;
      //merge DEL_POSITION:
      let delArray = handleEat(stateADD, action.payload);
      if (delArray.length > 0) {
        delArray.forEach((element) => {
          stateADD[element.x][element.y] = 0;
        });
      }
      return JSON.stringify(stateADD);
    //for connect5/6:(?)
    //do DEL_POSITION only(deprecated):
    // case DEL_POSITION:
    //   let stateDEL = JSON.parse(state);
    //   action.payload.forEach((element) => {
    //     stateDEL[element.x][element.y] = 0;
    //   });
    //   return JSON.stringify(stateDEL);
    default:
      return state;
  }
}
