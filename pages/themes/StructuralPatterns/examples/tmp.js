// A normal Laptop class
class Laptop {
	constructor(price,screenSize){
		this.price = price;
		this.screenSize = screenSize;
	}
}

// Decorator: memory
function memory( laptop ) {
	memoryPrice = 75;
	laptop.price += memoryPrice;
}
// Decorator: ssd
function ssd( laptop ) {
	SSD_Price = 100;
	laptop.price += SSD_Price;
}

var thinkPad = new Laptop(1000, 13);

// decorate a Laptop instance with memory and ssd
memory( thinkPad );
ssd( thinkPad );

console.log( thinkPad.price );