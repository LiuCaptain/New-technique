/**
 * TypeScript 相对 JavaScript 的优势:
 * ①、ts 的静态类型，使得我们在开发过程中，发现潜在问题
 * ③、更友好的编辑器自动代码提示
 * ③、代码语义更加清晰易懂
 * */ 

// 写法1
function tsDemoOne (data: { x: number, y: number }) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}
tsDemoOne()

// 写法2
type PointOne = { x: number, y: number }
function tsDemoTwo (data: PointOne) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

// 写法3
interface PointTwo { x: number, y: number }
function tsDemoThree (data: PointTwo) {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}