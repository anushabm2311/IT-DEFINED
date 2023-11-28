// fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response)=>response.json())
// 		.then((json)=>console.log(json))

// fetch("https://jsonplaceholder.typicode.com/posts")
// 		.then((response)=>response.json())
// 		.then(data=>data.forEach(elements=>{console.log(elements.title)}))


//fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response)=>response.json())
    //   .then(data=>data.reduce((accumulator,count)=>accumulator+count.id,0));


// fetch("https://jsonplaceholder.typicode.com/posts")
//  		.then((response)=>response.json())
// 	    .then(data=>data.forEach(elements=>{console.log(elements.title)}))

// async function fetchdata(){
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// 	const data = await response.json();
// 	let out=data.reduce((accumulator,count)=>accumulator+count.id,0);
// 	console.log(out);
// }
// fetchdata();


let str="madam"
 
 function ispalindrome(str) {
    let length=str.length;
    for(let i=0;i<length/2;i++)
    {
        if(str[i]!==str[length - 1 -i])
        {
            return 'it is not a palindrome'
        }
    }
    return'it is palindrome'
 }
console.log(ispalindrome(str))


// async function fetchdata(){
// 	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// 	const data = await response.json();
// 	let out=data.forEach(elements=>{console.log(elements.title)});
// 	console.log(out);
// }
// fetchdata();




    	