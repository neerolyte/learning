export {}
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBegginer: boolean = true;
let total: number = 0;
let name: string = 'Dave';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Dave', 22];

// enum fun times
enum Color {Red, Green = 12, Blue};

let c: Color = Color.Green;
console.log(c);

// basically untyped
let randomValue: any = 10;
randomValue = true;
randomValue = 'Dave';

// no error checking on type any
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

let myVariable: unknown = 'Dave';
console.log((myVariable as string).toUpperCase());

// guard functions automatically allow ts to pass
function hasName(obj: any): obj is { name: string } {
	return !!obj &&
		typeof obj === "object" &&
		"name" in obj
}
if (hasName(myVariable)) {
	console.log(myVariable.name);
}

// no type inference
let a;
a = 10;
a = true;

// b gets type inference, so only has number methods available
let b = 20;
b.toExponential();

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// return type can be inferred or explicit
function add(num1: number, num2?: number): number {
	return num2 ? num1 + num2 : num1;
}
add(5, 10);
add(5);

function add2(num1: number, num2: number = 10) {
	return num1 + num2;
}

interface Person {
	firstName: string;
	lastName?: string;
}

function fullName(person: Person) {
	let message = person.lastName
		? `${person.firstName} ${person.lastName}`
		: person.firstName;
	console.log(message);
}

let p: Person = { firstName: 'Bruce', lastName: 'Wayne' };
fullName(p);
p = { firstName: 'Bruce' };
fullName(p);

class Employee {
	private employeeName: string;

	constructor(name: string) {
		this.employeeName = name;
	}

	greet() {
		console.log(`Good Morning ${this.employeeName}`)
	}
}

let employee1 = new Employee('Dave');
// console.log(employee1.employeeName); // private
employee1.greet();

class Manager extends Employee {
	constructor(managerName: string) {
		super(managerName);
	}
	delegateWork() {
		console.log(`Manager delegating tasks`)
	}
}

let m1 = new Manager('Bruce');
m1.greet();
m1.delegateWork();

