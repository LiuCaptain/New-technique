// setter 和 getter
class Person {
  constructor (private name_:string) {}
  get name () {
    return this.name_ + ' lee'
  }
  set name (val:string) {
    this.name_ = val
  }
}

const person = new Person('dell')
console.log(person.name)
person.name = 'simon'
console.log(person.name)


// 单例模式：
class Demo {
  private constructor (public name:string) {}
  private static instance: Demo
  static createDemo () {
    if (!this.instance) {
      return this.instance = new Demo('dell')
    }
    return this.instance
  }
}

const demo = Demo.createDemo() // 只能通过这种方式获取类的实例
console.log(demo.name)