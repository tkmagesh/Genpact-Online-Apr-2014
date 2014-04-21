/*
this -> the invocation context of a function
	 -> NOT equivalent to the object that "CONTAINS" the function

Ways to change the this context
1. make the function a "method" of the target object
	OR
2. use the "call" or "apply" methods of the function and pass the target object as the first argument
*/

/*Assignment
	Wrie a function that will "fix" the "this" context of a function to a particular object so that you CANNOT change the this context of the function in any way to a different object
*/


function whoAmI(){
  console.log("My Name is ", this.name);
}

var emp1  = {
  name : "Magesh"
}

emp1.whoAmI = whoAmI; //changing the this context using option 1.


var emp2 = {
  name : "Suresh"
}

whoAmI.call(emp2) //chaning the this context using option 2.



function bindThis(targetObj,fn){
	//do something
	//should NOT use fn.bind()
	return fn;
}

whoAmI = bindThis(emp2,whoAmI);

whoAmI() //=> should print "My Name is Suresh" (Suresh is the name of emp2)

emp1.whoAmI = whoAmI; 
emp1.whoAmI() // should print "My Name is Suresh" (Suresh is the name of emp2) even though the function is invoked with "emp1"


