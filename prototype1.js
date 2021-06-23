const city = {
	street: 'Mashtoc',
	district: 'Kentron'
};

const country = {
	cities: "Yerevan",
	mountains: "Ara",
	street: "Abovyan"
};


city.__proto__=country;



console.log( country.district);//undefined
console.log( city.street);
console.log( city.mountains);

