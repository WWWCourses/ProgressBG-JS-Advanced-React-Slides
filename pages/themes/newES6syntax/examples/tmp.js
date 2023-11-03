class A{
	#id=1

	get id(){
		return this.#id
	}

	set id(newX){
		this.#id = newX
	}
}

const a = new A();

console.dir( a );