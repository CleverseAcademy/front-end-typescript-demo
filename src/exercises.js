const mapRevertSign = (arr) => {
  const result = []

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    result.push(element * -1)
  }
  return result
}

console.log(mapRevertSign(["A", "B", "C"]))