type ArrayElement = string | number

const appendToArray1 = 
  (array: ArrayElement[], nextElem: ArrayElement): ArrayElement[] => 
    array.concat(nextElem)

console.log(appendToArray1([2, 3, 4], 5))
console.log(appendToArray1([2, "3", 4], 5))
console.log(appendToArray1([2, 3, 4], "5"))


// const appendToArray2 = 
//   <T>(array: T[], nextElem: T): T[] => 
//     array.concat(nextElem)

// console.log(appendToArray2([2, 3, 4], 5))
// console.log(appendToArray2<number>([2, "3", 4], 5))
// console.log(appendToArray2([2, 3, 4], "5"))
