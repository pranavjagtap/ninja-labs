/*
  Understanding JavaScript prototypes
  ─────────────────────────────────────
  010 Simple objects
  Exercise 1 of 10

	# Simple objects

	There are many ways of creating objects in JavaScript, but the simplest way is
	by using object literals:

	    var alien = {
	        legs: 3
	    };

	## Challenge

	Write a program that:

	  * Create an object called 'robot' using an object literal
	  * robot should have a property 'smart' with value true
	  * Claim the result robot.smart
*/

// -> Create an object called 'robot' using an object literal
// -> robot should have a property 'smart' with value true
var robot = {
    smart: true
};

// -> Claim the result robot.smart
claim(robot.smart, true);

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    robot: robot
};
