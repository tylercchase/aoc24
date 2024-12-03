export function parse(input: string) {

  return input.split('\n')
}

export function partOne(input: ReturnType<typeof parse>) {
  let output = 0;
  for (let line of input) {
    const regex = /mul\(\d+,\d+\)/g;
    const matches = line.matchAll(regex);
    let thing = 0;
    for (let match of matches) {
      let sub = match[0];
      let formatted = sub.substring(4, sub.length - 1).split(',')
      //@ts-ignore
      thing += +formatted[0] * +formatted[1]
    }
    output += thing;
  }
  return output;
}

export function partTwo(input: ReturnType<typeof parse>) {

    let enabled = true;
    let output = 0;
  for (let line of input) {
    const regex = /mul\(\d+,\d+\)|don't\(\)|do\(\)/g

    const matches = [...line.matchAll(regex)];
    let thing = 0;
    for (let match of matches) {
      let sub = match[0];
      if (sub === "don't()") {
        enabled = false
      } else if (sub === "do()") {
        enabled = true
      } else if (enabled) {
        const formatted = sub.substring(4, sub.length - 1).split(',')
        //@ts-ignore
        thing += +formatted[0] * +formatted[1]
      }
    }
    output += thing;
  }
  return output;
}