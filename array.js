let array=[1,2,3,4,5,6,7,8,9,10];

let sum=0;

for(let i=1;i<array.length;i++ ){
sum += array[i];
}
console.log(sum)




 console.log(" ")





let a = [ 1,2,3,4,5,6,7,8];
printEven(a);

function printEven(a){
	let i;
	for(i=0;i<a.length;i++)
	{
		if(a[i]%2==0){
			console.log(a[i]);		
		}
	}

	}



console.log(" ")





let b = [ 1,2,3,4,5,6,7,8];
printOdd(b);

function printOdd(b){
	
	for(let i=0;i<b.length;i++)
	{
		if(b[i]%2!=0){
			console.log(b[i]);		
		}
	}


	}
