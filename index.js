/* Problem # 1A */
var num1 = 15;
var num2 = 10;
var result = num1 + num2;
console.log (result)

/* Problem # 1B */
var string1 = "Hello";
var string2 = "World";
var space = " ";
var combined = string1 + space + string2;
console.log (combined);

/* Problem # 2 */
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var fruits = ["apple", "banana", "melon", "kiwi", "grapes", "strawberry"];
var fruitycolor = [colors, fruits];
console.log (fruitycolor[0][1] + " " + fruitycolor[1][2]);
console.log (fruitycolor[0][0]);

/* Problem # 3 */
var number = 507;
if (number <= 100) {
	alert("the variable is less than 100!")
}
else {
	alert("the variable " + number + " is greater than 100!")
}

/* Problem # 4 */ 
function enterName(name) {
	return alert("You have entered " + name + " as a name.");
}
enterName("Jenny");

/* Problem # 5 */
function prizedDoor (door) {
	if (door === 1) {
		return alert("Door 1 prize is a puppy");
	}
	else if(door === 2) {
		return alert("Door 2 prize is an iphone");
	}
	else if(door === 3) {
		return alert("Door 3 prize is a laptop");
	}
	else if(door === 4) {
		return alert("Door 4 prize is a car")
	}
	else {
		return alert("This door has no prize!")
	}
}
prizedDoor(5);






