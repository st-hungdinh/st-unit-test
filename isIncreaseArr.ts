export const isIncreaseArr = (arr: number[]): boolean => {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (typeof arr[i] !== 'number' || typeof arr[i + 1] !== 'number') return false;

    if (isNaN(arr[i]) || isNaN(arr[i + 1])) return false;

    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
