/**
 * 运行 ts文件 方法：
 * 方法1：通过命令行将 ts文件 转成 js文件 操作方法：
 * ①、在终端中输入 “tsc + 文件名.ts”
 * ②、在终端中输入 “node + 文件名.js”
 * 
 * 方法2：直接通过工具运行 ts文件
 * ①、全局安装 ts-node 包，命令： npm install -g ts-node
 * ②、终端中输入 “ts-node 文件名.ts”
 * */

function tsDemoOne (data: { x: number, y: number }) {
  const result = Math.sqrt(data.x ** 2 + data.y ** 2)
  console.log('result:', result)
  return result
}
tsDemoOne({x: 3, y: 4})