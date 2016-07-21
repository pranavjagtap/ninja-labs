/*
  Understanding JavaScript prototypes
  ─────────────────────────────────────
  020 Proto
  Exercise 2 of 10

	## The __proto__ object

	To understand prototype chains in JavaScript there is nothing as simple as the __proto__ property.
	Unfortunately __proto__ is not part of the standard interface of JavaScript, at least not until ES6.
	So you shouldn't use it in production code. However it makes explaining prototypes easy.

	    // let's create an alien object
	    var alien = {
	        kind: 'alien'
	    };

	    // and a robot object
	    var robot = {
	        kind: 'robot'
	    };

	    // and an object called 'zippy'
	    var zippy = {};

	    // assign alien as the prototype of zippy
	    zippy.__proto__ = alien;

	    // zippy is now linked to alien
	    // it 'inherits' the properties of alien
	    console.log(zippy.kind); //=> 'alien'

	    // assign robot as the prototype of zippy
	    zippy.__proto__ = robot;

	    // and now zippy is linked to robot
	    console.log(zippy.kind); //=> 'robot'

	As you can see the __proto__ property is very straightforward to understand and use.
	Even if we shouldn't use __proto__ in production code,
	I think that these examples give the best foundation to understand the JavaScript object model.

	You can check that one object is the prototype of another by doing:
      console.log(alien.isPrototypeOf(zippy));
      //=> true
*/


// -> Create a machine object
//    with a property motors = 4
var machine = {
    motors: 4
};

// -> Create a robot object
//    with a property friendly = true
var robot = {
    friendly: true
};

// -> Create a robby object
var robby = {};

// -> Make machine the prototype of robot
//The '__proto__' property is deprecated, use 'prototype' instead.
// robot.prototype = machine;
robot.__proto__ = machine;

// robot is now linked to machine
// it 'inherits' the properties of machine
// console.log(robot.motors); //=> 4

// -> Make robot the prototype of robby
//The '__proto__' property is deprecated, use 'prototype' instead.
// robby.prototype = robot;
robby.__proto__ = robot;

// robby is now linked to robot
// it 'inherits' the properties of robot
// console.log(robot.friendly); //=> true

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    machine: machine,
    robot: robot,
    robby: robby
};
