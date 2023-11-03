class A{
    #id
    get id(){
        return this.#id
    }

    set id(id){
        this.#id = id
    }
}


const a = new A();

a['#id'] = 9;
console.log(a.id);


a.id = 1;
console.log(a.id);


console.dir(a);