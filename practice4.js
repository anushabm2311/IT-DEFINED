// function outer(){
// 	var b = 10;
// 	 function inner(){
// 	      var a = 20;
// 	      console.log(a+b);
// 	 }
// 	 return inner();
// }
// outer()

	// `console.log(test)
		// var test=10;`

let person = {
	full_name: function()
	{
		return this.fname + "" +this.lname
	}
}

let person1={
	fname:"anu",
	lname:"gowda"
}



let out = person.full_name.call(person1,22)
console.log(out)