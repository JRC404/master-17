let person = {
	name: 'Dean',
	age: 20,
	eyeColor: 'green',
	phoneNumber: '11111111111',
	siblings: [{
		name: 'someone',
	}],
	speak() {
		console.log(this);
		console.log(`Hello my name is ${this.name}`);
	}
}
function test() {
	console.log(this);
}
test()
// person.speak();
// console.log(`Hello my name is ${person.name}`);
//methods
//fucntions
// console.log(person.siblings[1].name);
// delete person.phoneNumber
// console.log(person);
// person.siblings[0].age++;
// console.log(person.siblings[0].age);
// let chosenProp = 'age' // data comes from somewhere else
// if (chosenProp == "age") {
// 	console.log(person.age);
// } else if (chosenProp == "name") {
// 	console.log(person.name);
// } else if (chosenProp == "phoneNumber") {
// 	console.log(person.phoneNumber);
// }
// console.log(person[chosenProp]);
// undefined
//using a variable
//key value pairs
// comma to seperate key value pairs
// let arr = [{name: 'someone'},{name: 'someone else'}]
// console.log(arr[0].name);