import { SET_FILE_NAME } from "../actions";

const INIT_FILENAME = () => {
  let now = new Date();
  return now.toISOString() + "_" + navigator.language;
};

export default function fileName(state: String = INIT_FILENAME(), action) {
  switch (action.type) {
    case SET_FILE_NAME:
      if (action.payload === "") {
        return INIT_FILENAME();
      } else {
        return action.payload;
      }
    default:
      return state;
  }
}
