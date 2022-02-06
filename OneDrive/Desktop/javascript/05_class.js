"use strict";
//Object oriented programming

class Person {
  //constructor
  constructor(name, age) {
    this.name = name; //field
    this.age = age; //field
  }

  speak() {
    console.log(`${this.name} Hello!`);
  }
}

const jy = new Person("jy", 25);
jy.speak();
console.log(jy);

//Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; //age부르는 순간 setter호출, age에 할당하는 순간 setter 호출
  }

  get age() {
    return this._age; //age field call 할 때마다, getter 호출
  }
  set age(value) {
    this._age = value < 0 ? 0 : value; //이상한 값을 user가 넣었을 때 오작동 방지
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);
//getter만 선언하고 setter 선언 안하면, undefined나올 것

//Private Field
class Experiment {
  publicField = 2;
  #privateField = 0; //private field, 외부에서 접근 불가(encapsulate)
}

const experiment = new Experiment();
console.log(experiment.privateField);

//Static properties, methods
class Article {
  static publisher = "dream Coding"; //constructor 내부에 static 불가
  constructor(articleNumber) {
    //object마다 갖는 것임.(생성자니까)
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(this.articleNumber); //class에는 articleNumber가 없음
    console.log(Article.publisher); //static으로 정의가 되어서. class소유
  }
}

const article = new Article(44);
Article.printPublisher();

//Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의 메소드도 호출 후
    console.log("TT"); //내가 쓴 메소드 호출
  }

  //overriding
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
console.log(triangle.getArea());
triangle.draw();

//Class checking
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
