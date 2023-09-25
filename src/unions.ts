const isTrue: (value: string | boolean) => boolean = (value) => {
  if (typeof value === 'string') {
    return value === 'true'
  }
  return value
}

console.log(isTrue('true'))

console.log(isTrue('false'))

console.log(isTrue('เอิ้ว'))

console.log(isTrue('Men'))


console.log(isTrue(true))

console.log(isTrue(false))

// console.log(isTrue(3))
