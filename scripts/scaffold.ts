import chalk from 'chalk'
import dedent from 'dedent'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'

import { fetchInput } from './api.ts'

export async function scaffold(day: number, year: number) {
  const name = `${day}`.padStart(2, '0')

  const directory = new URL(`../src/${name}/`, import.meta.url)

  if (existsSync(directory)) return

  console.log(`📂 Setting up day ${day} of ${year}`)

  await mkdir(directory)

  const test = dedent`
  import { describe, expect, test } from 'bun:test'
  import { parse, partOne } from './01';

  test('Day 1', () => {
    describe('Part One', () => {
      let input = \`\`;
      let formatted = parse(input);
      let output = partOne(formatted);
      expect(11).toBe(11)
    })
    describe('Part Two', () => {
      expect(1).toBe(1)
    })
  })
  `

  const solution = dedent`
  export function parse(input: string) {
    return input
  }
  
  export function partOne(input: ReturnType<typeof parse>) {}

  export function partTwo(input: ReturnType<typeof parse>) {}
  `

  console.log(`📂 Fetching your input`)

  const input = await fetchInput({ day, year }).catch(() => {
    console.log(
      chalk.red.bold(
        '📂 Fetching your input have failed, empty file will be created.'
      )
    )
  })

  await Bun.write(new URL(`${name}.test.ts`, directory.href).pathname, test)
  await Bun.write(new URL(`${name}.ts`, directory.href).pathname, solution)
  await Bun.write(new URL(`input.txt`, directory.href).pathname, input ?? '')
  await Bun.write(new URL(`example.txt`, directory.href).pathname, '')

  console.log('📂 You all set up, have fun!')
}
