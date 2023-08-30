interface Container {
  name: string
  maxWeight: number
  currentWeight: number
}

const blackbag: Container = {
  name: 'blackBag',
  maxWeight: 100,
  currentWeight: 30
}

console.log(Object.keys(blackbag))

interface WaterContainer {
  density: number
  capacity: number
  current: number
}


interface Bottle extends WaterContainer {
  brand: string
}

interface Glass extends WaterContainer {
  color: string
}


const bottle: Bottle = {
  brand: "Singha",
  density: 1.0,
  capacity: 1500,
  current: 1500
}

const glass: Glass = {
  color: "transparent",
  density: 1.0,
  capacity: 500,
  current: 200
}


interface X {
  a: number
  b: string
}

interface Y {
  c: string
  d: number
}

type Z = X&Y

const z: Z = {
  a: 1,
  b: "abcd",
  c: "rrr",
  d: 2
}



interface Chair {
  brand: string
  color: string
  includeBackrest: boolean
}


