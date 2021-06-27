const Company = require ('./app');

const company = new Company('Anahit', 'Grigoryan', 'HR');

company.hireEmployee('Armen');

console.log(company.employees);

console.log(company.showEmployee());

console.log(company.workExperience(2004));