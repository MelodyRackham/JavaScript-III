/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of "this" inside of that function
will be the window object. (Window Binding)
* 2. Whenever a function is called by a preceding dot, the object before that dot is "this". (Implicit Binding)
* 3. Whenever a constructor function is used, "this" refers to the specific instance of the object
that is created and returned by the constructor function. (NEW Binding)
* 4. Whenever JavaScript's call or apply method is used, "this" is explicitly defined. (Explicit Binding)
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayMelody(name) {
  console.log(this);
  return name;
}
sayMelody('Melody');
// Principle 2
// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  },
};
myObj.sayHello('Melody');

// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4
// code example for Explicit Binding

function ghost() {
  console.log(this.boo);
}

let myGhost = {
  name: 'Casper',
  boo: 'booooo! 👻',
};

friendlyGhost = ghost.bind(myGhost);

friendlyGhost();
