//  The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.

// * 1. Window binding : 'this' goes to the window/console object

// * 2. Implicit binding : when a function references the object to the left of the dot (.)

// * 3. New binding : used in conjunction with a constructor function, using the 'new' keyword will make am enitrely new object with the values inside the parentheses.

// // * 4. Explicit binding : use call or apply to change what 'this' points to

// * write out a code example of each explanation above


// Principle 1

// code example for Window Binding

function favColor(color) {
    console.log(this);
    return color;
}

favColor('Green');

// Principle 2

// code example for Implicit Binding

let myName = {
    name: 'Josh',
    sayHi: function() {
        console.log(this.name);
    }
}

myName.sayHi()

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding