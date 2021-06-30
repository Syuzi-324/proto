let shop ={
	product: 'food',
	freeDays: 0

}


function Mall(name, floor, elevator, parking) {
	this.name = name;
	this.floor = floor;
	this.elevator = elevator;
	this.parking = parking;
	this.showData =function () {
		console.log(this.name +' has ' + this.floor + ' floors')  ;
	}
}

Mall.prototype = shop;

let mall1 = new Mall('Yerevan', 2, 'yes', 'yes');
let mall2 = new Mall('Dalma', 3, 'no', 'yes');

console.log(mall1.product);

console.log(mall2.freeDays);

mall2.showData();
