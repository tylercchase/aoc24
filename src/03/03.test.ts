import { describe, expect, test } from 'bun:test'
import { parse, partOne, partTwo } from './03';

test('Day 1', () => {
  describe('Part One', () => {
    let input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
    let formatted = parse(input);
    let output = partOne(formatted);
    expect(output).toBe(161)
  })
  describe('Part Two', () => {
    let input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
    let formatted = parse(input);
    let output = partTwo(formatted);
    expect(output).toBe(48)
  })
})