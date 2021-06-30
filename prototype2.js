
const tree3 = {
	species : "tsiraneni",
	quantity : "10"
}


function Trees(height, age) {
	this.height = height;
	this.age = age;
		
}




 Trees.prototype = tree3;
 
let tree2 = new Trees(50,  1);
let tree1 = new Trees(160,  4);



console.log(tree2.species);