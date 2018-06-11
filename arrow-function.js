// var square = (x) => {
//   var results = x * x;
//   return results;
// };
// NOTE: you can omit the () if there's only one arguement
var square = x => x*x;

console.log(square(9));
// NOTE: arrow functions don't have this binding or arguments
var user = {
  name: 'Michael',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHiAlt(1,2,3);
