const dog = {
	small: true,
	color: 'black',
	hasOwner: false
}

const dog1 = Object.create(dog);
dog.hasFood = true;

dog1.name = "Jessy";

console.log(dog1.name);

console.log(Object.keys(dog1));


const dog2 = Object.create(dog1);

console.log(dog2.color);

dog2.name = 'Rex';

delete dog2.name;

console.log(dog2.name);
delete dog1.name;

console.log(dog2.name);