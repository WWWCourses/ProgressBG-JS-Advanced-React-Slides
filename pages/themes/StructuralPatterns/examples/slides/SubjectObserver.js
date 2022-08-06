//The Subject "class"
var Subject = function () {
	this.observerList = [];
}
// Add an observer
Subject.prototype.registerObserver = function(observer) {
	this.observerList.push(observer);
}
// Remmove an observer
Subject.prototype.unregisterObserver = function(observer) {
	// find the Observer that wants to be removed
	var index = this.observerList.indexOf(observer);
	// Remove it from the array
	this.observerList.splice(index, 1);
}

// Notify all observers
Subject.prototype.notifyObservers = function() {
	for (let i = 0, len = this.observerList.length; i < len; i += 1) {
		this.observerList[i].update();
	}
}

// The Observer "class"
var Observer = function() {
	// notification means calling a method of the observer object
	// each observer must! implement their own version of notify, here we set default:
	this.update = function() {
		throw "update() is not implemented";
	}
}




// the state on which change subscribers must react
var data = 0;

// create Subject
var subject = new Subject();

// create Observers - each implements its own update() method
var a = new Observer();
a.update = ()=> {console.log(`Observer A process data: ${data}`)}
var b = new Observer();
b.update = ()=> {console.log(`Observer B process data: ${data}`)}

// Register the observers
subject.registerObserver(a);
subject.registerObserver(b);

// use
for (var i = 0; i < 4; i += 1){
	data += 1;
	subject.notifyObservers();
}

// Unregister observer a
subject.unregisterObserver(a);

// change data and notify again
data += 100;
subject.notifyObservers();