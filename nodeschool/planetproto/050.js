/*
	Understanding JavaScript prototypes
	─────────────────────────────────────
	050 Arrays and Objects
	Exercise 5 of 10


	## Arrays and objects in prototypes

	Arrays and objects may not behave as you expect them to behave.

	Let's see what happens when you modify an array:

	 var alien = {
			 skills: ['morph']
	 };

	 var zorg = {};
	 zorg.__proto__ = alien;

	 zorg.skills.push('clone');

	 console.log(zorg.skills);
	 //=> morph, clone
	 // we expected this

	 console.log(alien.skills);
	 //=> morph, clone
	 // maybe we didn't expect this, but it works like that
	 // because we have modified the array in the prototype object.

	When you change an array or an object you make the change directly on the object.

*/

// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to
//    an empty object `{}`
var machine = {
    parts: [],
    capabilities: {}
};
var robot = {};
var vehicle = {};


// -> Let's set the prototype of both robot and vehicle to machine
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
claim(robot.parts, []);

// -> What is `vehicle.parts`?
claim(vehicle.parts, []);

// -> What is `robot.capabilities`?
claim(robot.capabilities, {});

// -> What is `vehicle.capabilities`?
claim(vehicle.capabilities, {});

// -> Let's add a 'core' part to robot
robot.parts.push('core');

// -> What is `robot.parts` now?
claim(robot.parts, ['core']);

// -> What is `vehicle.parts` now?
claim(vehicle.parts, ['core']);

// -> Let's set an ability to vehicle
vehicle.capabilities.fly = true;

// -> What is `robot.capabilities` now?
claim(robot.capabilities, {
    fly: true
});

// -> What is `vehicle.capabilities` now?
claim(vehicle.capabilities, {
    fly: true
});


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    machine: machine,
    vehicle: vehicle,
    robot: robot
};
