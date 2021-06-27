function isEmail(email) {

	regExp = /^[\w+\.?\w+@\w{6}\.\w{3}]$/

	let c = regExp.test(email);

	return c;

}


console.log(isEmail('norayr.cv@mail.ru'));

console.log(isEmail('norayr.cvgmail.com'));

console.log(isEmail('norayrcv@gmail.com'));

console.log(isEmail('.cv@gmail.com'));

console.log(isEmail('norayr.cv@gmail'));