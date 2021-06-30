
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