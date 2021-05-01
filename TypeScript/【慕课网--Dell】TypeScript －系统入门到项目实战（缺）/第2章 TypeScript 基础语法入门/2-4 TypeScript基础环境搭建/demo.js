/**
 * 通过命令行将 ts文件 转成 js文件 操作方法：
 * ①、在终端中输入 “tsc + 文件名.ts”
 * ②、在终端中输入 “node + 文件名.js”
 * */
function tsDemoOne(data) {
    var result = Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
    console.log('result:', result);
    return result;
}
tsDemoOne({ x: 3, y: 4 });
