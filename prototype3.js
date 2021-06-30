function Car(make, model, color, year) {
	this.make = make;
	this.model = model;
	this.color = color;
	this.year = year;
}

const vehicle = {
	driver: 'YES',
	driverName: 'Joe',
	isbroken: 'No',

}

Car.prototype = vehicle;

let car = new Car('Toyota', 'Corolla', 'white', 2014);

console.log(car.isbroken);

