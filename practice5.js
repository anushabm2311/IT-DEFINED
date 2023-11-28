// function numberInterval(){
// 	let count =1;
// function printNumber(){
// 	if(count<=10){
// 		console.log(count);
// 		count++;
// 		setTimeout(printNumber,1000);
// 	}
// }
// printNumber();
// }
// numberInterval();


// function lastWordLength(input) {
// 	let words = input.split(' ');
//     return words[words.length-1].length;
// }
// console.log(lastWordLength("this is  anushagowda"));


// let arr=['a','b','c','a','a','b'];
// let count={};

// arr.forEach(ele =>{
// 	if(count[ele]){
// 		count[ele] +=1;
// 	}else{
// 		count[ele]=1;
// 	}
	
// });
            
// console.log(count);


// remove duplicate values
let a=['anu','anusha','anu','gowda','anu'];
 function duplicates(a) {
     return a.filter((item,index)=>a.indexOf(item)===index);
 }
 console.log(duplicates(a));


