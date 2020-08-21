import { TOGGLE_ORDER, TOGGLE_DARK, SWITCH_LANG } from "../actions";

const INIT_CONFIG = () => {
  return {
    useOrder: false,
    useDark: false,
    userLang: navigator.language,
  };
};

export default function userConfig(
  state: Object = INIT_CONFIG(),
  action
) {
  switch (action.type) {
    case TOGGLE_ORDER:
      return state;
    case TOGGLE_DARK:
      return state;
    case SWITCH_LANG:
      return state;
    default:
      return state;
  }
}
