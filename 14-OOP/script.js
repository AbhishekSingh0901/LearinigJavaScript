'use strict';

//Contructor function
// const Person = function (fullName, birthyear) {
//   // Instance properties
//   this.fullName = fullName;
//   this.birthyear = birthyear;

//   // ! BAD PRACTICE
//   // You should never to this,
//   this.calcAge = function () {
//     console.log(2023 - this.birthyear);
//   };
// };

// //Prototypes: each and every function in JS automatically has a property called prototype
// //prototype of linked objects
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthyear);
// };

// // console.log(Person.prototype);

// const jonas = new Person('Jonas', 1991);
// const matlida = new Person('matilda', 2000);
// console.log(jonas);
// console.log(matlida);

// Person.hey = function () {
//   console.log(`Hey There 😒`);
// };

// Person.hey();
// console.log(Person);
// jonas.calcAge();
//1. a new empty object is created
//2. function is called, this = object
//3. this object is linked to a prototype
//4. function automatically return

// console.log(jonas instanceof Person); //true

// const jay = 'jay';
// console.log(jay instanceof Person);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, matlida);
// console.log(jonas.species, matlida.species); //homo Sapiens
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//*Protypal inheritence: on built in  Objetcs

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [2, 3, 5, 4, 55, 8, 6, 55, 3]; //new Array = []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

//this is generallly not a good idea: DONT do it Practically!
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

//////////////////////////////////////////////////////////////////////////////////

//ES6 Classes

//Insatance methods
// class PersonCL {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }

//   calcAge() {
//     console.log(`${this.fullName}'s age is ${2023 - this.birthyear}`);
//   }

//   get age() {
//     return 2023 - this.birthyear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static sayhi() {
//     console.log(`Hey There 😒`);
//   }
// }

// const JohnDoe = new PersonCL('John Doe', 1986);
// // console.log(JohnDoe);
// // console.log(JohnDoe.age);
// // JohnDoe.calcAge();
// // JohnDoe.calcAge();

// PersonCL.prototype.greet = function () {
//   console.log(`hey ${this._fullName}`);
// };

// JohnDoe.greet();
// PersonCL.sayhi();
// JohnDoe.sayhi();

// const walter = new PersonCL('walter', 1965);
// console.log(walter);

//Getters and Setter:
// const account = {
//   owner: 'Jonas',
//   movements: [100, 200, 456, 842],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// console.log((account.latest = 500));
// console.log(account.movements);

//* Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(`${this.fullName}'s age is ${2023 - this.birthyear}`);
//   },

//   init(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.fullName = 'steven';
// steven.birthyear = 2000;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', '2002');
// sarah.calcAge();

//* Inheritence between classes: 'Constructor' Functions

// //constructor function
// const Person = function (firstName, birthyear) {
//   this.firstName = firstName;
//   this.birthyear = birthyear;
// };

// //prototype;
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthyear);
// };

// const Student = function (firstName, birthyear, course) {
//   Person.call(this, firstName, birthyear);
//   // this.firstName = firstName;
//   // this.birthyear = birthyear;
//   this.course = course;
// };

// //Linking Protypes;

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(
//     `HI! i am ${this.firstName}, i am ${
//       2023 - this.birthyear
//     } years old and i am persuing ${this.course} currently`
//   );
// };

// console.log(Student.prototype.__proto__);
// console.log(Student.prototype);

// const mike = new Student('mike', 2005, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// //*Inheritence between classes: ES6 Classes

// class PersonCL {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }

//   calcAge() {
//     console.log(`${this.fullName}'s age is ${2023 - this.birthyear}`);
//   }

//   get age() {
//     return 2023 - this.birthyear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static sayhi() {
//     console.log(`Hey There 😒`);
//   }
// }

// class Student extends PersonCL {
//   constructor(fullName, birthyear, course) {
//     //Always needs to happen first;
//     super(fullName, birthyear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `HI! i am ${this.fullName}, i am ${
//         2023 - this.birthyear
//       } years old and i am persuing ${this.course} currently`
//     );
//   }

//   calcAge() {
//     console.log(
//       `I am ${
//         2023 - this.birthyear
//       } years old, but i still behave like a child sometimes`
//     );
//   }
// }

// const martha = new Student('Martha Ji', 2000, 'CS');
// martha.introduce();
// martha.calcAge();

// //*Inheritence between Classes: Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(`${this.fullName}'s age is ${2023 - this.birthyear}`);
//   },

//   init(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   },
// };

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (fullName, birthyear, course) {
//   PersonProto.init.call(this, fullName, birthyear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `HI! i am ${this.fullName}, i am ${
//       2023 - this.birthyear
//     } years old and i am persuing ${this.course} currently`
//   );
// };

// const jay = Object.create(StudentProto);
// jay.init('jay', 1978, 'CS');
// jay.introduce();
// jay.calcAge();

//*Another Example:
class Account {
  //Public property
  locale = navigator.language;

  //Private Property
  #movements = [];
  #balance = 0;
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`thanks for apening an account`);
  }

  //Public Interfaces
  getMovements() {
    this.#movements;
  }

  depsoit(mov) {
    if (mov > 0) {
      console.log(`${mov}, deposited in account`);
      this.#balance += mov;
      this.#movements.push(mov);
    }
  }

  withdraw(mov) {
    if (mov > 0) {
      console.log(`${mov}, withdrawn from account`);
      this.#balance -= mov;
      this.#movements.push(-mov);
    }
  }

  _approveLoan(val) {
    true;
  }

  requestLoan(val) {
    const allow = this._approveLoan(val);
    if (allow) {
      this.depsoit(val);
      console.log('Loan approved');
    }
  }

  //Private Method Are not yet implimented
  // #approveLoan(val) {
  //   true;
  // }
}

const acc1 = new Account('Jonas', 'Rup', 1111);
console.log(acc1);
acc1.depsoit(1000);
acc1.depsoit(490);
acc1.depsoit(78);
acc1.withdraw(238);
acc1.requestLoan(10000);
////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

// Your tasks:

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

//Solution:

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   console.log(`speed: ${(this.speed += 10)}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`speed: ${(this.speed -= 5)}km/h`);
// };

// const car1 = new Car('BMW', 120);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
// car1.brake();
// car1.brake();

//Coding Challenge 2:

// Your tasks:

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)

// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.

// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`speed: ${(this.speed += 10)}km/h`);
//   }

//   brake() {
//     console.log(`speed: ${(this.speed -= 5)}km/h`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.brake();
// ford.speedUs = 80;
// console.log(ford.speed);

//Coding Challenge #3

// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �

// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   console.log(`speed: ${(this.speed += 10)}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`speed: ${(this.speed -= 5)}km/h`);
// };

// const CarEv = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// CarEv.prototype = Object.create(Car.prototype);

// CarEv.prototype.chargeBattery = function (chargeTo) {
//   this.Charge = chargeTo;
// };

// CarEv.prototype.accelarate = function () {
//   this.charge--;
//   this.speed += 20;
//   console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%;
//   `);
// };

// CarEv.prototype.constructor = CarEv;

// const eTron = new CarEv('Audi', 150, 80);
// console.log(eTron);
// eTron.accelarate();
// eTron.brake();
