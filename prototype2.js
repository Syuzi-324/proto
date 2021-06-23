
const tree3 = {
	tree : "tsiraneni",
	lake : "Sevan"
}


function Trees(height, species, age) {
	this.height = height;
	this.age = age;
	this.getTree = function(){

		return "This tree has " + this.height + " height. And it's " + this.age + " years old tree";
	}
	
	
	
	
}


let tree2 = new Trees(50, 'xndzoreni', 1);
 Trees.prototype = tree3;

let tree1 = new Trees(160, 'tzeni', 4);



tree1.hasOwner = true;
tree2.isOld = false;



console.log(tree1.getTree());
console.log(tree2.getTree());

console.log(tree3.hasOwner);//undefined