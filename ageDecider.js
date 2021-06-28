function findAge(yearOfBirth) {


	let now = Date.now();
	
	let past = new Date(yearOfBirth).getTime();

    console.log(past);
	
	console.log(Math.floor((now-past) /(3600*1000*24*365)));
	
	
}


findAge('1994-06-15');


