type stringOrNumber = string | number

const someStringOrNumber: stringOrNumber = 'giigke'

const isTrue: (value: string | boolean) => boolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true'
  }
  return value
}

const isContainFalsyValue = (value: string | number[] | boolean[]): boolean => {
  if (value instanceof Array) {
    value.some((i) => {
      if (typeof i === 'number') return i === 0
      return !i
    })
    // return value.length === 0
  }
  return value === ''
}

console.log(isTrue('true'))

console.log(isTrue('false'))

console.log(isTrue('เอิ้ว'))

console.log(isTrue('Men'))

console.log(isTrue(true))

console.log(isTrue(false))

// console.log(isTrue(3))
