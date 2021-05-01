// Type annotation（类型注解，指由我们来告诉 TS 变量是什么类型）
let count:number = 123

// Type inference（类型推断，指 TS 会自动的尝试分析变量的类型）
let each = 123
const num = 456

/**
 * 总结：
 * ①、如果 TS 能够分析出变量的类型，我们就不需要进行类型注解
 * ③、如果 TS 无法分析出变量的类型，我们就需要进行类型注解
 * */