// @ts-nocheck
import { isIncreaseArr } from './isIncreaseArr'; // import function to test

describe('Test isIncreaseArr func when input is array', () => {
  it('returns true if array is increasing', () => {
    expect(isIncreaseArr([1, 2, 3])).toBe(true);
  });

  it('returns false if array is not increasing', () => {
    expect(isIncreaseArr([1, 3, 2])).toBe(false);
  });

  it('returns true if array is empty', () => {
    expect(isIncreaseArr([])).toBe(true);
  });

  it('returns true if array has only one element', () => {
    expect(isIncreaseArr([1])).toBe(true);
  });

  it('return true if array has the same elements', () => {
    expect(isIncreaseArr([1, 2, 2, 3])).toBe(true);
  });
});

describe('Test isIncreaseArr func when input is not array', () => {
  it('returns false if input is number', () => {
    expect(isIncreaseArr(1)).toBe(false);
  });

  it('returns false if input is string', () => {
    expect(isIncreaseArr('1')).toBe(false);
  });

  it('returns false if input is object', () => {
    expect(isIncreaseArr({})).toBe(false);
  });

  it('returns false if input is null', () => {
    expect(isIncreaseArr(null)).toBe(false);
  });

  it('returns false if input is undefined', () => {
    expect(isIncreaseArr(undefined)).toBe(false);
  });

  it('returns false if input is boolean', () => {
    expect(isIncreaseArr(true)).toBe(false);
  });

  it('returns false if input is function', () => {
    expect(isIncreaseArr(() => {})).toBe(false);
  });

  it('returns false if input is symbol', () => {
    expect(isIncreaseArr(Symbol('1'))).toBe(false);
  });

  it('returns false if input is NaN', () => {
    expect(isIncreaseArr(NaN)).toBe(false);
  });
});

describe('Test isIncreaseArr func when input is array with invalid elements', () => {
  it('returns false if array has string elements', () => {
    expect(isIncreaseArr([1, '2', 3])).toBe(false);
  });

  it('returns false if array has object elements', () => {
    expect(isIncreaseArr([1, {}, 3])).toBe(false);
  });

  it('returns false if array has null elements', () => {
    expect(isIncreaseArr([1, null, 3])).toBe(false);
  });

  it('returns false if array has undefined elements', () => {
    expect(isIncreaseArr([1, undefined, 3])).toBe(false);
  });

  it('returns false if array has boolean elements', () => {
    expect(isIncreaseArr([1, true, 3])).toBe(false);
  });

  it('returns false if array has function elements', () => {
    expect(isIncreaseArr([1, () => {}, 3])).toBe(false);
  });

  it('returns false if array has symbol elements', () => {
    expect(isIncreaseArr([1, Symbol('1'), 3])).toBe(false);
  });

  it('returns false if array has NaN elements', () => {
    expect(isIncreaseArr([1, NaN, 3])).toBe(false);
  });
});

describe('Test isIncreaseArr func when input is array with mixed elements', () => {
  it('returns false if array has mixed elements 1', () => {
    expect(isIncreaseArr([1, '2', NaN, 4])).toBe(false);
  });

  it('returns false if array has mixed elements 2', () => {
    expect(isIncreaseArr([1, {}, null, 4])).toBe(false);
  });
});
