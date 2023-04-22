// @ts-nocheck
import { isIncreaseArr } from './isIncreaseArr';

describe('Test isIncreaseArr func when input is array', () => {
  describe('Input is array contains only number', () => {
    it('Should return true when input is empty array', () => {
      expect(isIncreaseArr([])).toBe(true);
    });

    it('Should return true if input has one element', () => {
      expect(isIncreaseArr([1])).toBe(true);
      expect(isIncreaseArr([2])).toBe(true);
      expect(isIncreaseArr([3])).toBe(true);
    });

    it('Should return true if input  is increasing', () => {
      expect(isIncreaseArr([1, 2])).toBe(true);
      expect(isIncreaseArr([1, 2, 3])).toBe(true);
      expect(isIncreaseArr([1, 2, 2])).toBe(true);
    });

    it('Should return false if input is not increasing', () => {
      expect(isIncreaseArr([2, 3, 1])).toBe(false);
      expect(isIncreaseArr([2, 2, 1])).toBe(false);
      expect(isIncreaseArr([3, 2, 1])).toBe(false);
    });
  });

  describe('Input is array contains mixed elements', () => {
    it('Should return false if input is array contains string', () => {
      expect(isIncreaseArr([''])).toBe(false);
      expect(isIncreaseArr(['a'])).toBe(false);
      expect(isIncreaseArr(['1'])).toBe(false);
      expect(isIncreaseArr([1, ''])).toBe(false);
    });

    it('Should return false if input is array contains boolean', () => {
      expect(isIncreaseArr([true, false])).toBe(false);
      expect(isIncreaseArr([1, true, false])).toBe(false);
      expect(isIncreaseArr([1, false, 2])).toBe(false);
      expect(isIncreaseArr([1, 2, true])).toBe(false);
    });

    it('Should return false if input is array contains function', () => {
      expect(isIncreaseArr([() => {}])).toBe(false);
      expect(isIncreaseArr([1, () => {}])).toBe(false);
    });

    it('Should return false if input is array contains NaN', () => {
      expect(isIncreaseArr([NaN])).toBe(false);
      expect(isIncreaseArr([1, NaN])).toBe(false);
    });

    it('Should return false if input is array contains object', () => {
      expect(isIncreaseArr([{}, {}])).toBe(false);
      expect(isIncreaseArr([{}, 1])).toBe(false);
    });

    it('Should return false if input is array contains undefined', () => {
      expect(isIncreaseArr([undefined])).toBe(false);
      expect(isIncreaseArr([1, undefined])).toBe(false);
    });

    it('Should return false if input is array contains null', () => {
      expect(isIncreaseArr([null])).toBe(false);
      expect(isIncreaseArr([1, null])).toBe(false);
    });

    it('Should return false if input is array contains array', () => {
      expect(isIncreaseArr([[]])).toBe(false);
      expect(isIncreaseArr([1, []])).toBe(false);
    });
  });
});

describe('Test isIncreaseArr func when input is not array', () => {
  it('Should return false if input is number', () => {
    expect(isIncreaseArr(1)).toBe(false);
    expect(isIncreaseArr(2)).toBe(false);
    expect(isIncreaseArr(3)).toBe(false);
  });

  it('Should return false if input is string', () => {
    expect(isIncreaseArr('')).toBe(false);
    expect(isIncreaseArr('a')).toBe(false);
    expect(isIncreaseArr('1')).toBe(false);
  });

  it('Should return false if input is object', () => {
    expect(isIncreaseArr({})).toBe(false);
    expect(isIncreaseArr({ a: 1 })).toBe(false);
  });

  it('Should return false if input is null', () => {
    expect(isIncreaseArr(null)).toBe(false);
  });

  it('Should return false if input is undefined', () => {
    expect(isIncreaseArr(undefined)).toBe(false);
  });

  it('Should return false if input is boolean', () => {
    expect(isIncreaseArr(true)).toBe(false);
    expect(isIncreaseArr(false)).toBe(false);
  });

  it('Should return false if input is function', () => {
    expect(isIncreaseArr(() => {})).toBe(false);
  });

  it('Should return false if input is symbol', () => {
    expect(isIncreaseArr(Symbol('1'))).toBe(false);
  });

  it('Should return false if input is NaN', () => {
    expect(isIncreaseArr(NaN)).toBe(false);
  });
});
