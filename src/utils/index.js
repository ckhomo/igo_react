/* Wait for Optimization... */
//Check if EAT happens...
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
  return [].concat(...confirmedDeath);

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
  function removeEmpty(input: Array) {
    return input.filter(Boolean);
  }
}
//Check if unit is forbidden...
export function handleForbid(board: Object, position: Object) {
  //獲取落子處棋串:
  let groupList = generateGroup([position]);
  //確認棋串死亡與否:
  let forbidResult = deathCheck(groupList);
  return forbidResult;

  function generateGroup(list) {
    const LIST_LENGTH = list.length;
    list.forEach((element) => {
      try {
        if (board[element.x + 1][element.y] === element.status) {
          list.push({ x: element.x + 1, y: element.y, status: element.status });
        }
      } catch (error) {}

      try {
        if (board[element.x - 1][element.y] === element.status) {
          list.push({ x: element.x - 1, y: element.y, status: element.status });
        }
      } catch (error) {}

      try {
        if (board[element.x][element.y + 1] === element.status) {
          list.push({ x: element.x, y: element.y + 1, status: element.status });
        }
      } catch (error) {}
      try {
        if (board[element.x][element.y - 1] === element.status) {
          list.push({ x: element.x, y: element.y - 1, status: element.status });
        }
      } catch (error) {}
    });
    list = removeEmpty(list);
    list = removeDuplicated(list);
    if (LIST_LENGTH !== list.length) {
      return generateGroup(list);
    } else {
      return list;
    }
  }
  function deathCheck(groupList: Array) {
    for (let index = 0; index < groupList.length; index++) {
      try {
        if (board[groupList[index].x + 1][groupList[index].y] === 0) {
          return false;
        }
      } catch (error) {}
      try {
        if (board[groupList[index].x - 1][groupList[index].y] === 0) {
          return false;
        }
      } catch (error) {}
      try {
        if (board[groupList[index].x][groupList[index].y + 1] === 0) {
          return false;
        }
      } catch (error) {}
      try {
        if (board[groupList[index].x][groupList[index].y - 1] === 0) {
          return false;
        }
      } catch (error) {}
    }
    return true;
  }
  //移除重複&空白元素:
  function removeDuplicated(input: Array) {
    return input.filter(
      (item, index) =>
        index ===
        input.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(item))
    );
  }
  function removeEmpty(input: Array) {
    return input.filter(Boolean);
  }
}
