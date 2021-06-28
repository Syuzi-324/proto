function findAge(yearOfBirth) {


	let now = new Date();
	let currentyear = now.getFullYear();
	let currentmonth = now.getMonth();
	let currentday = now.getDate();
	
	
	let birthdate = new Date(yearOfBirth);
	let birthyear = birthdate.getFullYear();
	let birthmonth = birthdate.getMonth();
	let birthday = birthdate.getDate();

    
	if(birthmonth < currentmonth) {
		return currentyear - birthyear;
	}
	else if(birthmonth == currentmonth && birthday <= currentday) {
		return currentyear - birthyear;
	}
	
	else {
		return currentyear - birthyear -1;
	}
	
	
}


console.log(findAge('1994-06-28'));


