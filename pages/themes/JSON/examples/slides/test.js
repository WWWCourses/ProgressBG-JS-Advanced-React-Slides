// // this is NOT a JS object, it's JUST a string
// const jsonData = ` {
// 	"title": "Learn HTML",
// 	"completed": true,
// 	"id": 1
// }`;
// console.log(typeof jsonData);

// // parse json in rder to get the js object:
// const data = JSON.parse(jsonData)
// console.log(typeof data);

// this is a JS object
const data = {
	"title": "Learn HTML",
	"completed": true,
	"id": 1
};
console.log(typeof data);


// let's convert it into JSON string:
const dataJSON = JSON.stringify(data)
console.log(typeof dataJSON);
