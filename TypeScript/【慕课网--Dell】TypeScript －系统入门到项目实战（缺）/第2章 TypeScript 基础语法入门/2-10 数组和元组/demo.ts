// 数组（array）的一些类型注解
const arrB:string[] = ['a', 'b', 'c']
const arrC:undefined[] = [undefined, undefined]
const arrA:(number | string)[] = [1, '2', 3]

type Person = { name: string, age: number } // type alias（类型别名）
const arrD:{ name: string }[] = [{ name: 'dell' }]
const arrE:Person[] = [{name: 'dell', age: 27}]

class User {
  name: string
  age: number
}
const arrF:User[] = [
  new User(),
  { name: 'lisa', age:  24 }
]

// 元组（tuple）的一些类型注解
const tupleA:[number, string, number] = [1, 'a', 2] // 理解：一个数组的长度和数组中每一项的类型都是固定，它便可以通过元组进行管理
const tupleList:[string, string, number][] = [ // 应用场景 csv
  ['a1', 'b1', 1],
  ['a2', 'b2', 2],
  ['a3', 'b3', 3]
]