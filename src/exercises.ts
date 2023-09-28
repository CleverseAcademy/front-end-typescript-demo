type mapRevertSignFunc = (arr: number[]) => number[]

const mapRevertSign: mapRevertSignFunc = (arr) => {
  const result: number[] = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]

    result.push(element * -1)
  }

  return result
}

console.log(mapRevertSign([2, 4, 6]))

type mutualFunc = (arr1: string[], arr2: string[]) => string[]

const mutual: mutualFunc = (arr1, arr2) => {
  const result: string[] = []

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index]
    if (arr2.includes(element)) {
      result.push(element)
    }
  }

  return result
}

const class1 = ['Alice', 'Bob', 'John', 'Jane']
const class2 = ['John', 'Foobar', 'Barbaz', 'Foobaz', 'Bob']

type gcdFunc = (a: number, b: number) => number

const gcd: gcdFunc = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b
      continue
    }

    b -= a
  }

  return a
}

type filterLtFunc = (value: number, arr: number[]) => number[]

const filterLt: filterLtFunc = (value, arr) => {
  const result: number[] = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]

    if (element < value) result.push(element)
  }

  return result
}

type fizzBuzzFunc = (n: number) => number | string

type FizzBuzzText = 'Fizz' | 'Buzz' | 'FizzBuzz'
type fizzBuzzConcreteFunc = (n: number) => number | FizzBuzzText

const fizzBuzzGenerator: fizzBuzzFunc = (n) => {
  if (n % (3 * 5) === 0) {
    return 'FizzBuzz'
  }
  if (n % 3 === 0) {
    return 'Fizz'
  }
  if (n % 5 === 0) {
    return 'Buzz'
  }

  return n
}

const fizzBuzz = (n: number) => {
  if (n < 0) return

  for (let i = 0; i < n; i++) {
    console.log(fizzBuzzGenerator(i))
  }
}

interface X {
  a: number
  b: string
}

interface Y {
  aa: number
  ba: string
}

interface Zoo extends X, Y {
  g: boolean
}

/* type for isMember function, in union style */
type isMemberFuncUnionType = (
  q: number | string,
  arr: number[] | string[],
) => boolean

const isMemberUnion: isMemberFuncUnionType = (q, arr) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element === q) return true
  }
  return false
}

// Implementation above allow mixed type function call
isMemberUnion(5, ['A', 'B', 'C', 'D'])

type isMemberFuncGenericType = <T>(q: T, arr: T[]) => boolean

const isMember: isMemberFuncGenericType = (q, arr) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element === q) return true
  }
  return false
}

// But isMember function won't allow mixed type function call
// isMember(5, ['A', 'B', 'C', 'D'])

isMember(5, [1, 3, 7, 12])
isMember<string>('john', ['jane', 'jim', 'john'])
isMember(true, [false, false])
