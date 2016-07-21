/*
	Understanding JavaScript prototypes
	─────────────────────────────────────
	090 Implicit this
	Exercise 9 of 10


	## 'this' is assigned implicitly
	When we use new with a function, JavaScript injects an implicit reference to the new object being created in the form of the this keyword.
	It also returns this reference implicitly at the end of the function.

	When we do this:

		 function Alien() {
				 this.kind = 'alien';
		 }

		 var zippy = new Alien();
		 zippy.kind; //=> 'alien'

	Behind the scenes it is like doing something like:

		 function Alien() {
				 var this = {}; // not valid JavaScript, just for illustration
				 this.__proto__ = Alien.prototype;

				 this.kind = 'alien';

				 return this;
		 }

	But keep in mind that the implicit this is only assigned to a new object when using new.
	If you forget the new keyword then this will be the global object.
	Of course forgetting new is a cause of multiple bugs, so don't forget new.

	One popular convention is to capitalize the first letter of a function when it is intended to be used as a function constructor e.g. Alien, so you know straight away that you are missing the new keyword.

*/

// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return
//    an object of your own making, not the implicit 'this'.

var Robot = function() {

};

var Vehicle = function() {
    // return Vehicle.prototype;
    return {};
};

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    Robot: Robot,
    Vehicle: Vehicle
};
