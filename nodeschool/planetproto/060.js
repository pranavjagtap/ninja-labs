/*
	Understanding JavaScript prototypes
	─────────────────────────────────────
	060 Object Create
	Exercise 6 of 10


	## Object.create

	As explained before __proto__ is not a well supported way of assigning prototypes to objects.
	So the next simplest way is using Object.create().
	This is available in ES5, but old browsers/engines can be shimmed using this [es5-shim](https://github.com/kriskowal/es5-shim).

		 var alien = {
				 kind: 'alien'
		 };

		 // creates a new object which prototype is alien
		 var zack = Object.create(alien);

		 console.log(zack.kind); // => 'alien'

	You can pass an object to Object.create to add specific properties to the new object:

		 var zack = Object.create(alien, {age: {value:  13} });
		 console.log(zack.age); // => '13'

	Yes, the object you need to pass is a bit convoluted, but that is the way it is.
	See the docs [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

	### Object.getPrototypeOf

	You can get the prototype of an object by using Object.getPrototypeOf:

		 var zack = Object.create(alien);
		 Object.getPrototypeOf(zack); //=> alien

	### Object.setPrototypeOf

	Newer versions of JavaScript (ES2015) also provide Object.setPrototypeOf(object, prototype) as an "official" alternative to changing __proto__.
	However, please keep in mind that changing the prototype on runtime is a very slow operation.
	It's always better to define the prototype before the object is created, e.g. by using Object.create().


*/

// -> Let's create an object called 'machine'
var machine = {};

// -> Use Object.create to create another object called 'robot' with 'machine'
//    set as the prototype
var robot = Object.create(machine);

// -> Use Object.create to create another object called 'robby' with 'robot'
//    as the prototype
var robby = Object.create(robot);

// -> What is the result of `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> What is the result of `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Which object is the direct prototype of robby?
claim.same(Object.getPrototypeOf(robby), robot);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    machine: machine,
    robot: robot,
    robby: robby
};
