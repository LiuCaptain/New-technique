// 基础类型： number，string，null，undefined，boolean，symbol，void
// ①、注意：如果把变量声明和赋值分开写，TS 无法推断出变量的类型
let count;
count = 123


// 对象类型： {}，[]，Class，function
// ①、定义函数的两种写法（第一种写法的函数返回值number约束可以去掉，以为 TS 能够推断出返回值的类型）
const make = (str: string):number => parseInt(str, 10)
const simon: (str: string) => number = (str) => parseInt(str, 10)
// ②、date类型等等还有其他的对象类型
const date = new Date()

// 其他的 case：
// ①、如果使用 JSON.parse()等等其他的一些内置函数，TS 并不能推断出返回值的类型
interface Person {
  name: string
}
const rawData = '{"name": "dell"}'
const result = JSON.parse(rawData)
// ②、变量的多种类型
let temp:number | string = 123
temp = '456'