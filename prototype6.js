class Animal {
	constructor (){}
	livingPlace = 'ZOO';
	livingCountry = 'Armenia';

}

class Elephant extends Animal {
	constructor(name, age) {
		super()
		this.name = name;
		this.age = age;
		
	}


}

let elephant1 = new Elephant('Jessy', 3);

console.log(elephant1.livingPlace)

