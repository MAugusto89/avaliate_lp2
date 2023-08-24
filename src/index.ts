import { PositiveArray } from './models/PositiveArray'

const arr = new PositiveArray()
arr.add(1)
arr.add(10)
arr.add(-7)
arr.add(56)
console.log(arr.remove(1))
console.log(arr.values)
