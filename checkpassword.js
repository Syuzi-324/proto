function isPassword(password) {

	regExp = /([a-zA-Z0-9-]{3,15})/g

	let c = regExp.test(password);

	return c;

}


console.log(isPassword('bareA1234-'));

console.log(isPassword('-AAAA'));

console.log(isPassword('A-aaa12'));

console.log(isPassword('ba'));

console.log(isPassword('bareA1234'));

console.log(isPassword('bareA1234'));