export function parse(input: string) {
  let thing = input.split('\n').map(x => x.split('   '))
  return thing
}

export function partOne(input: ReturnType<typeof parse>) {
  //@ts-ignore
  let left_side = input.map(x => +x[0]).sort()
  //@ts-ignore
  let right_side: number[] = input.map(x => +x[1]).sort()
  let combined = 0
  for(let i = 0; i < left_side.length; i++) {
    //@ts-ignore
    combined += Math.abs(left_side[i] - right_side[i])
  }

  return combined;

}

export function partTwo(input: ReturnType<typeof parse>) {
  let scores: {[key: number]: number}= {1: 0}
  //@ts-ignore
  let left_side = input.map(x => +x[0])

  //@ts-ignore
  let right_side: number[] = input.map(x => +x[1])
  for(let item of right_side){
    if(scores[item] && scores.hasOwnProperty(item)) {
      scores[item] += 1
    } else {
      scores[item] = 1;
    }
  }
  let output = 0;
  for(let thing of left_side) {
    if(scores[thing]) {
      output += scores[thing] * thing
    }
  }
  return output
}