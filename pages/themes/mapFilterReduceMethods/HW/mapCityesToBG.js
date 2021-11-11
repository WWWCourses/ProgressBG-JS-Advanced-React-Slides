// TASK: generate new array of cities, in which the cities names are mapped to their Bulgarian names. Use the provided dictionary bellow:

let dict = {
	'Sofia' : 'София',
	'Plovdiv' : 'Пловдив',
	'Burgas' : 'Бургас',
	'Varna' : 'Варна'
}
let cities = [
			{name: 'Sofia', population: 1_236_000},
			{name: 'Plovdiv', population: 343_424 },
			{name: 'Burgas', population: 202_766},
			{name: 'Varna', population: 335_177},
];

// YOUR CODE HERE:

// TEST:
console.log(bgCities);

// EXPECTED OUTPUT:
// [
// 	{ name: 'София', population: 1236000 },
// 	{ name: 'Пловдив', population: 343424 },
// 	{ name: 'Бургас', population: 202766 },
// 	{ name: 'Варна', population: 335177 }
// ]