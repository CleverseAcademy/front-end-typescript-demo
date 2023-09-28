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

const stringArr: ArrayOfString = ['A', 'B', 'C']

type ArrayOfNumberOrString = (number | string)[]

const arr1: ArrayOfNumberOrString = [1, 2, 3, 4]
const arr2: ArrayOfNumberOrString = ['A', 'B', 'C', 'D']

const mixedArray: ArrayOfNumberOrString = ['A', 'B', 4, 'D']

type ArrayOf<T> = T[]

const numberArr1: ArrayOf<number> = [30, 20, 50]
// const numberArr2: ArrayOf<number> = [30, 20, '50']

const stringArr1: ArrayOf<string> = ['Fanta', 'Coke', 'Pepsi']
// const stringArr2: ArrayOf<string> = ['Fanta', 30]
// const numberArr2: ArrayOf<number> = ['30']

const appendToArray2 = <T>(array: T[], nextElem: T): T[] =>
  array.concat(nextElem)

console.log(appendToArray2([2, 3, 4], 5))

// console.log(appendToArray2<number>([2, "3", 4], 5))

console.log(appendToArray2([2, '3', 4], 5))
console.log(appendToArray2([2, '3', 4], '5'))

// console.log(appendToArray2([2, "3", false], "5"))

/** The `combine` function combines the given array with the given next element, returning a new array.
 * The `nextElem` argument must be of type `T` or `number`. */
const combine = <T, U extends T | number>(array: T[], nextElem: U): (T | U)[] =>
  (array as (T | U)[]).concat(nextElem)

combine(['A', 'B', 'C'], 4) // Returns ['A', 'B', 'C', 4]

// This statement will not compile, as `U` can only be `T` or `number`:

// combine([5, 6, 7], 'A')

combine<string, number>(['A', 'B', 'C'], 4)

combine(['A', 'B', 'C', 4], '4')

/**
 * The following line will not compile because the `combine` function does not allow the
 * `nextElem` argument to be of type `boolean`.
 */
// combine(['A', 'B', 'C', 4], true)

/**
 * However, the following line will compile because the `array` parameter of the `combine` function is of type string | number | boolean.
 * Hence, the `nextElem` parameter is valid for type boolean
 * */

combine(['A', 'B', 4, true, false], false)

interface WithCreationTimestamp {
  createdAt: Date
}

const isCreatedBefore = <T extends WithCreationTimestamp>(
  data: T,
  time: Date = new Date('2023-05-22T00:00:00.000+07:00'),
) => +new Date(data.createdAt) < +time

isCreatedBefore({
  title: 'Eiei',
  createdAt: new Date(),
})

isCreatedBefore({
  description: 'Eiei',
  createdAt: new Date(),
})

isCreatedBefore({
  owner: 'Cleverse Academy',
  title: 'Eiei',
  description: 'Eiei',
  createdAt: new Date(),
})

/**
 * The following line will not compile because the `createdAt` property of the object is of type `string`, not `Date`.
 * To fix the error, you need to convert the `createdAt` property to a `Date` object before passing it to the `isCreatedBefore` function.
 */
// isCreatedBefore({
//   createdAt: '2023-05-22T00:00:00.000+07:00',
// })
