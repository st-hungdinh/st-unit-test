export const isIncreaseArr = (arr: any): boolean => {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return true;
  }
  if (arr.length === 1 && typeof arr[0] === 'number' && isNaN(arr[0]) === false) {
    return true;
  }

  let isIncrease = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      typeof arr[i] === 'number' &&
      typeof arr[i + 1] === 'number' &&
      arr[i + 1] >= arr[i] &&
      isNaN(arr[i]) === false
    ) {
      isIncrease = true;
    } else {
      isIncrease = false;
      break;
    }
  }

  return isIncrease;
};
