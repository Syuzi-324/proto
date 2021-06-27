
class Company {
	constructor(name, surname, position){
		this.name = name;
		this.surname = surname;
		this.position = position;
	}

    employees = [];
    
	departments = [];

	hireEmployee(newEmployee, department) {
		this.employees.push(newEmployee);
		this.departments.push(department);
	}

	fireEmployee() {
		this.employees.pop();
	}

	showEmployee() {
		return this.name + ' ' + this.surname + ' ' + this.position;
	}

	workExperience(startYear) {
		let now = new Date();
		let year = now.getFullYear();
		return year - startYear; 

	}

}


module.exports = Company;