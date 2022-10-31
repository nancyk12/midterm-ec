const {
  twoSmallest,
} = require('./main.js')

describe('twoSmallest', () => {
  it('twoSmallest', () => {
    expect(twoSmallest([8, 7, 5, -2, 10])).toEqual([-2, 5]);
    expect(twoSmallest([0, 6, 12, 1])).toEqual([0,1]);
    expect(twoSmallest([122, 277, 409, 99])).toEqual([99,122]);
    expect(twoSmallest([12, 15, 7, 100, 5, 200, 111, 1000, 11, 4])).toEqual([4,5]);
  })

  it('twoSmallest - updates second smallest w/o new smallest', () => {
    expect(twoSmallest([12, 15, 100, 5, 200, 111, 1000, 11])).toEqual([5,11]);
    expect(twoSmallest([12, 17, 10, 2, 200, 7])).toEqual([2,7]);
  })

  it('twoSmallest exactly length 2', () => {
    expect(twoSmallest([3, 7])).toEqual([3, 7]);
    expect(twoSmallest([7, 2])).toEqual([2, 7]);
  })

  it('twoSmallest - under length 2', () => {
    expect(twoSmallest([2])).toEqual(undefined);
    expect(twoSmallest([])).toEqual(undefined);
  })
})
