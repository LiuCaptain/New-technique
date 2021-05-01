// 基础类型 number，string，null，undefined，boolean，symbol，void
const count:number = 123
const sex:string = 'man'

// 对象类型（自定义对象类型）
class Person {}

const obj:{ sex:string, age: number } = { sex: 'man', age: 27 }
const arr:number[] = [1, 2, 3]
const person:Person = new Person() // 意思是：person 必须是 Person 类对应的对象
const getTotal: () => number = () => 123