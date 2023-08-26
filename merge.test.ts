import { merge } from './merge';

describe('add function', () => {
  test('should merge 2 sorted array with un equal length', () => {
    expect(merge( [1, 3, 5, 7], [2, 4, 6, 8])).toStrictEqual([1,2,3,4,5,6,7,8]);
  });

  test('should merge 2 sorted array with un equal length', () => {
    expect(merge( [7, 8, 9, 10], [3, 4, 11, 12])).toStrictEqual([3,4,7,8,9,10,11,12]); 
  });

  test('should merge 2 sorted array with un equal length', () => {
    expect(merge( [3, 4], [7, 8, 9, 10])).toStrictEqual([3, 4, 7, 8, 9, 10 ]); 
  });

  test('should merge 2 sorted array with un equal length', () => {
    expect(merge( [2,7,10], [14,18,16,20])).toStrictEqual([2,7,10,14,18,16,20]); 
  });
});
