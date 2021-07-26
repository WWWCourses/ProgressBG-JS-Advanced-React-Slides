// create student class

class Student{
	constructor(name, age, major){
		this.name = name;
		this.age = age;
		this.major = major;
	}
	toString(){
		return this.name + " " + this.age + " " + this.major;
	}
}


// create student array
var students = [
	new Student("John", 25, "Math"),
	new Student("Jane", 20, "CS"),
	new Student("Mike", 25, "CS"),
	new Student("Tom", 30, "Math"),
];

// print oldest student
console.log(students.sort(function(a, b){
	return a.age - b.age;
}
).pop());

