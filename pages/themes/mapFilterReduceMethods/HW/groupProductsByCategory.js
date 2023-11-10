/* ---------------------------------- TASK ---------------------------------- */
// Implement the groupProductsByCategory() function, which takes an array of
// products as input and returns an array of products grouped by category,
// as given in EXPECTED OUTPUT section bellow

// GIVEN:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

// EXPECTED OUTPUT:
// {
// 	music: [
// 		{ code: 1, name: 'product1', category: 'music', price: 1 },
// 		{ code: 4, name: 'product4', category: 'music', price: 4 }
// 	],
// 	books: [
// 		{ code: 2, name: 'product2', category: 'books', price: 2 },
// 		{ code: 3, name: 'product3', category: 'books', price: 3 }
// 	]
// }



/* ----------------------- Solution with forEach Loop ----------------------- */
function groupProductsByCategory_ForLoop(products) {
	let groupedProducts = {};

	products.forEach(p => {
		if( !groupedProducts[p.category] ){
			groupedProducts[p.category]=[]
		}

		groupedProducts[p.category].push(p)
	});

	return groupedProducts;
}

/* -------------------------- Solution with Reduce -------------------------- */
function groupProductsByCategory_Reduce(products) {
	return products.reduce((groupedProducts, p) => {
		if( !groupedProducts[p.category] ){
			groupedProducts[p.category] = []
		}
		groupedProducts[p.category].push(p);
		return groupedProducts;

	}, {});
}


// TEST:
console.log( groupProductsByCategory_ForLoop(products) );
console.log( groupProductsByCategory_Reduce(products) );

