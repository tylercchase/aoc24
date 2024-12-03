import { describe, expect, test } from 'bun:test'
import { parse, partOne } from './02';

test('Day 1', () => {
  describe('Part One', () => {
    let input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
    let formatted = parse(input);
    let output = partOne(formatted);
    expect(output).toBe(2)
  })
  describe('Part Two', () => {
    expect(1).toBe(1)
  })
})