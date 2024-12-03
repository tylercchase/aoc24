import { describe, expect, test } from 'bun:test'
import { parse, partOne, partTwo } from './01';

test('Day 1', () => {
  describe('Part One', () => {
    let input = `3   4
4   3
2   5
1   3
3   9
3   3`;
    let formatted = parse(input);
    let output = partOne(formatted);
    expect(output).toBe(11)
  })
  describe('Part Two', () => {
    let input = `3   4
4   3
2   5
1   3
3   9
3   3`;
    let formatted = parse(input);
    let output = partTwo(formatted);
    expect(output).toBe(31)
  })
})