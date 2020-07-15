const fetchPosition = (player = 1) =>
  localStorage.getItem("pos" + player ? "White" : "Black");

return dispatch(fetchPosition(player));
