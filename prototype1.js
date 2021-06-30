
const house = {
	stairs:"Yes",
	elevator:"YES"

};

function Foo(rooms, floors, garden, pool){
	this.rooms = rooms;
	this.floors = floors;
	this.garden = garden;
	this.pool = pool;
	
}

Foo.prototype = house;
let b = new Foo(4, 2, "YES", "YES");


console.log(b.stairs);



const city = {
cityName: "Yerevan",
avenue: "Mashtoc"
}

function Country(name, capital, population) {
	this.name = name;
	this.capital = capital;
	this.population = population;
}



Country.prototype = city;
let country = new Country('Armenia', 'Yerevan', 3);
console.log(country.avenue);