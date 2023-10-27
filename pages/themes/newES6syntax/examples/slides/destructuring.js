// let a,b;
// [a,b] = [1,2]
// console.log(a,b);


// function greet({name,age}){
// 	console.log(`Hello ${name}. You are ${age} years old!`);
// }

// const userData = {
// 	id: 1,
// 	name:'Ada',
// 	age: 23,
// }

// greet(userData)


// delete object property
let obj = {'a':1,'b':2,'c':3}
let {c,...obj2} = obj
console.log(c);
console.log(obj2);

