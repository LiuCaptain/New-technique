/**
 * 访问类型：public，private，protected
 * ①、private 只允许在类内部使用
 * ②、public 允许在类外部 和 类内部使用（类默认的访问类型）
 * ③、protected 允许在类内部 和 继承的子类中使用
 * */

class Person {
  private year = 27
  public sayHi () {
    return this.year
  }
  protected name:string
}
class Teacher extends Person {
  public sayBye () {
    return this.name
  }
}

const person = new Person()
console.log(person.sayHi())
const teacher = new Teacher()
console.log(teacher.sayBye())


// constructor 部分1
class Food {
  constructor (name:string, public year:number) {
    this.name = name
  }
  public name:string
}

const food = new Food('banana', 27)
console.log(food.name, food.year)


// constructor 部分2
class Car {
  constructor (public name:string) {}
}
class Lanbo extends Car{
  constructor (public year:number) {
    super('car')
  }
}

const lanbo = new Lanbo(27)
console.log(lanbo.name)
console.log(lanbo.year)