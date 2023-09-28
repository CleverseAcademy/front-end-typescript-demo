type ArrayElement = string | number

const appendToArray1 = (
  array: ArrayElement[],
  nextElem: ArrayElement,
): ArrayElement[] => array.concat(nextElem)

console.log(appendToArray1([2, 3, 4], 5))
console.log(appendToArray1([2, '3', 4], 5))
console.log(appendToArray1([2, 3, 4], '5'))

type ArrayOfNumber = number[]

const numberArr: ArrayOfNumber = [1, 2, 3]

type ArrayOfString = string[]

const stringArr: ArrayOfString = ["A", "B", "C"]

type ArrayOfNumberOrString = (number | string)[]

const arr1: ArrayOfNumberOrString = [1, 2, 3, 4]
const arr2: ArrayOfNumberOrString = ['A', 'B', 'C', 'D']

const mixedArray: ArrayOfNumberOrString = ['A', 'B', 4, 'D']

type ArrayOf<T> = T[]


const numberArr1: ArrayOf<number> = [30, 20, 50]
const numberArr2: ArrayOf<number> = [30, 20, "50"]


const stringArr1: ArrayOf<string> = ['Fanta', 'Coke', 'Pepsi']
const stringArr2: ArrayOf<string> = ['Fanta', 30]
// const numberArr2: ArrayOf<number> = ['30']

// interface
// const appendToArray2 =
//   <T>(array: T[], nextElem: T): T[] =>
//     array.concat(nextElem)

// console.log(appendToArray2([2, 3, 4], 5))
// console.log(appendToArray2<number>([2, "3", 4], 5))
// console.log(appendToArray2([2, 3, 4], "5"))
