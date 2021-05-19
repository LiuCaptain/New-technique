// 设置只读属性
class Person {
  constructor (name:string) {
    this.name_ = name
  }
  private name_:string

  // 设置只读属性方式一
  get name () {
    return this.name_
  }

  // 设置只读属性方式二
  public readonly year = 27
}

const person = new Person('dell')
person.name = 20
person.year = 30


// 抽象类（如果多个类有通性，那么可以将通性定义为一个抽象类）
abstract class Geom {
  // 抽象方法，说明这个方法是抽象的，不用具体实现
  abstract getArea():number
  // 具体方法
  getType () {
    return 'Geom'
  }
  // 具体属性
  color:string
}

class Circle extends Geom {
  getArea () {
    return 2 * 3
  }
}
class Square extends Geom {
  getArea () {
    return 5 * 8
  }
}


// 接口抽离
interface People {
  name:string,
  age:number
}
interface Teacher extends People {
  chalk:string
}
interface Worker extends People {
  hammer:string
}

const teacher = {
  name: 'simon',
  age: 20,
  chalk: 'pink'
}
const worker = {
  name: 'jack',
  age: 30,
  hammer: 'Germany'
}

const userInfo = (user:People) => {
  console.log(user.name)
}

userInfo(teacher)
userInfo(worker)

/**
 * 总结：
 * 1、抽象类只能被继承，不能被实例化
 * */ 