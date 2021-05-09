import { sum2 } from '..';

describe('sum', () => {
  test('three negative numbers', () => {
    expect(sum2(-2, -3)).toBe(-5);
  });
});
