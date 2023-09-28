function toString1(aNumber: number): string {
  return String(aNumber)
}

const toString2 = (aNumber: number): string => {
  return `${aNumber}`
}

const toString3 = (aNumber: number): string => String(aNumber)

const sth1 = (aNumber: number) => {
  const x = []
  for (let index = 0; index < aNumber; index++) {
    x.push(index)
  }
  x.push("X")
  return x
}


const map = (array: number[], mapFunction: (value: number, index: number, array: number[]) => number): number[] => {
  return array.map(mapFunction)
}

// map([1,2,3], (i) => )

// const sth3 = (x: string) => x.length + "30"

type abcddadb = (a: number) => (b: string) => (c: boolean) => (d: {da: number, db: string}) => boolean 

const foo : abcddadb = a => b => c => d => true

console.log(sth1(3))

// Tips: every type in typescript, including function, can be declared as a dedicated type

type summarizeFunction = (text: string, trail: string, len: number) => string

type stringOrNumber = string | number

const stn: stringOrNumber = "giigke"

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
  text.split(' ').reduce((acc, item) => (acc.length + item.length + 1 + trail.length > len) ?  acc : [acc, item].join(" "), "") + trail

const articleFoo = 'Good morning ladies and gentlemen'

console.log(reduceSummarize(articleFoo, ' ...', 20))
// console.log(typeof toString1(112))
