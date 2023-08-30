function toString1(aNumber:number): string {
  return String(aNumber)
}

const toString2 = (aNumber: number): string => {
  return String(aNumber)
}

const toString3 = (aNumber: number): string => String(aNumber)


// Tips: every type in typescript, including function, can be declared as a dedicated type

type summarizeFunction = (text: string, trail: string, len: number) => string

const summarize: summarizeFunction = (text, trail, len) => ""
