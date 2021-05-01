/**
 * 一般来说，我们需要对函数的返回值类型作类型注解
 * */ 

// 1、函数正常传参的情况：
// 函数的返回值为数字
function make (a:number, b:number):number {
  return a + b
}

// 函数不应该有返回值
function jack ():void {
  console.log('123')
}

// 函数永远不可能执行到最后
function simon ():never {
  throw new Error()
  console.log('123')
}
function jeemy ():never {
  while (true) {}
  console.log('123')
} 

// 2、函数解构传参的情况：
function neviry ({ a, b }:{ a:number, b:number }):number {
  return a + b
}
function nvried ({ a }:{ a:number }):number {
  return a
}