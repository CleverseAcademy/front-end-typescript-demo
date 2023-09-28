/**
 * Basic: type casting number => string function
 */
function toString1(aNumber: number): string {
  return String(aNumber)
}

const toString2 = (aNumber: number): string => {
  return `${aNumber}`
}

const toString3 = (aNumber: number): string => String(aNumber)

/**
 * Mysterious function that transform number parameter to array of number
 */
const range = (aNumber: number): number[] => {
  const x = []
  for (let index = 0; index < aNumber; index++) {
    x.push(index)
  }
  return x
}

/**
 * map function, like Array.map
 * to illustrate how to declare a function type as one of arguments
 */
type mapCallbackFunction = (
  value: number,
  index: number,
  array: number[],
) => number

const map = (array: number[], mapFunction: mapCallbackFunction): number[] => {
  return array.map(mapFunction)
}

// map([1,2,3], (i) => i + 1)

/**
 * How about function that returning function?
 */
type currying = (
  a: number,
) => (b: string) => (c: boolean) => (d: { da: number; db: string }) => boolean

const foo: currying = (a) => (b) => (c) => (d) => true

console.log(range(3))

// Tips: every type in typescript, including function, can be declared as a dedicated type

type summarizeFunction = (text: string, trail: string, len: number) => string

const ordinarySummarize: summarizeFunction = (text, trail, len) => {
  if (trail.length >= len) return ''

  const shortenString: string[] = []

  let summaryLen: number = 0

  const wordList = text.split(' ')

  for (let index = 0; index < wordList.length; index++) {
    const word: string = wordList[index]

    if (summaryLen + word.length + 1 + trail.length > len) break

    summaryLen += word.length + 1
    shortenString.push(word)
  }

  return shortenString.join(' ') + trail
}

const reduceSummarize: summarizeFunction = (text, trail, len) =>
  text
    .split(' ')
    .reduce(
      (acc, item) =>
        acc.length + item.length + 1 + trail.length > len
          ? acc
          : [acc, item].join(' '),
      '',
    ) + trail

const articleFoo = 'Good morning ladies and gentlemen'

console.log(reduceSummarize(articleFoo, ' ...', 20))
// console.log(typeof toString1(112))
