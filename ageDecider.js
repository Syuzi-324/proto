function findAge(yearOfBirth) {


	let now = new Date();
	let year = now.getFullYear();
	
	console.log(year - yearOfBirth);
	
}

findAge('1945');


