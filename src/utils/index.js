//Calculate to check if EAT happens.
export function handleEat(board: Object, position: Object) {
  //四周顏色相異的點:
  let aroundStatus = [];
  //四周之點的相連串:
  let GOGroup = [];
  //確認死亡的串:
  let confirmedDeath = [];

  aroundStatus = surroundStatus(aroundStatus, position);
  aroundStatus = removeEmpty(aroundStatus);
  aroundStatus.forEach((element) => {
    GOGroup.push(generateGroup([element]));
  });
  GOGroup = removeDuplicated(GOGroup);
  GOGroup.forEach((element) => {
    confirmedDeath.push(deathCheck(element));
  });
  confirmedDeath = removeEmpty(confirmedDeath);
  return confirmedDeath;

  //獲取周圍座標:
  function surroundStatus(status: Array, position: Object) {
    status.push(loadStatus(position.x + 1, position.y));
    status.push(loadStatus(position.x - 1, position.y));
    status.push(loadStatus(position.x, position.y + 1));
    status.push(loadStatus(position.x, position.y - 1));
    return status;
  }
  function loadStatus(x, y) {
    try {
      if (board[x][y] === -position.status) {
        return { x: x, y: y };
      }
    } catch (error) {
      return undefined;
    }
  }

  //產生同色相連點之集合:
  function generateGroup(groupList: Array) {
    const ORIGIN_LENGTH = groupList.length;
    groupList.forEach((element) => {
      groupList = surroundStatus(groupList, element);
    });
    groupList = removeEmpty(groupList);
    groupList = removeDuplicated(groupList);
    if (ORIGIN_LENGTH !== groupList.length) {
      return generateGroup(groupList);
    } else {
      //送出前做排序:
      groupList = groupList.sort((a, b) => {
        if (a.x === b.x) {
          return b.y - a.y;
        } else {
          return b.x - a.x;
        }
      });
      return groupList;
    }
  }

  //檢查死棋:
  function deathCheck(group: Array) {
    for (let count = 0; count < group.length; count++) {
      try {
        if (board[group[count].x + 1][group[count].y] === 0) {
          return null;
        }
      } catch (error) {}
      try {
        if (board[group[count].x - 1][group[count].y] === 0) {
          return null;
        }
      } catch (error) {}
      try {
        if (board[group[count].x][group[count].y + 1] === 0) {
          return null;
        }
      } catch (error) {}
      try {
        if (board[group[count].x][group[count].y - 1] === 0) {
          return null;
        }
      } catch (error) {}
    }
    return group;
  }

  //移除重複&空白元素:
  function removeDuplicated(input: Array) {
    return input.filter(
      (item, index) =>
        index ===
        input.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(item))
    );
  }
  function removeEmpty(input: Array){
    return input.filter(Boolean);
  }
}
