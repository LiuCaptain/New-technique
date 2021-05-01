interface Person { // 接口
  // readonly name: string,
  name: string,
  write():string,
  say: () => number,
  age?: number,
  [propName:string]: any
}

// 接口可以进行继承
interface People extends Person {
  read(): number
}

// 接口可以定义函数
interface sayHi {
  (str:string): number
}

// 及接口定义数组
interface list {
  [index:number]: number
}

type User = string // type alias（类型别名），interface 不能代表基础类型

const make = (person:Person):void => {
  console.log(person.name)
}
const jack = (person:Person, name:string):void => {
  person.name = name
}

// make({ name: 'dell', sex: 'man' }) // 直接以字面量的形式作为参数传递，TS 会进行强校验，多传递或少传递参数都不会通过类型校验
const person = {
  name: 'dell',
  write () { return '5' },
  say: () => 5,
  sex: 'man' // 非字面量的形式作为参数传递，TS 不会进行强校验，所以多出一个属性也没有关系
}
make(person)

jack(person, 'lee')


// class 类可以应用接口
class teacher implements Person {
  name = 'simon'
  write () { return '5' }
  say = () => 5
}

const func:sayHi = (shim) => parseInt(shim, 10)
const arr:list = [1, 2, 3]

/**
 * 总结：
 * ①、通用型规范是优先使用 interface，其次再使用 type alias
 * ②、class 类可以应用接口
 * ③、查看 ts 文件解析成 js 文件，第一步：输入命令 tsc --init（将工程初始化成 typescript 工程），
 *    第二步：输入命令 tsc demo.ts，从而将不能在浏览器和 node 环境中运行的 TS 代码编译成 JS 代码
 * ④、TS 代码解析成 JS 代码后，其中的 interface、type 等等代码都会被去除掉，所以它们只是作为语法校验的工具，不会成为 JS 代码
 * */ 