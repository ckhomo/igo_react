/**
 * @param {boolean} player
 */

const fetchPosition = function (player = true) {
  localStorage.getItem("pos" + player ? "Black" : "White");
};

/**
 * @param {boolean} player
 */
export const loadPosition = function (player) {
  return dispatch(fetchPosition(player));
};
