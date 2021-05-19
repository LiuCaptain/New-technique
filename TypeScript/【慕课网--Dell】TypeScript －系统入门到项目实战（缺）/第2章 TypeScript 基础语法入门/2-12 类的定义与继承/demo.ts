class Person {
  name = 'dell'
  getName () {
    return this.name
  }
}

class Teacher extends Person {
  year = 27
  getYear () {
    return this.year
  }
  getName () { // 覆盖父类的 getName 方法
    return 'simon'
  }
  getParentInfo () {
    return super.getName() + ' lee'
  }
}

const person = new Person()
console.log(person.getName())

const teacher = new Teacher()
console.log(teacher.name) // 获取父类的 name
console.log(teacher.getName()) // 调用覆盖父类的 getName 方法
console.log(teacher.getYear())
console.log(teacher.getParentInfo())

/**
 * 面试问题：
 * 1.super 在代码中你一般用来做些什么？
 * 答：当子类把父类的方法覆盖掉的时候，如果想再次调用父类的这个方法，我们就可以通过 super 调用父类那个被覆盖掉的方法
 * */ 