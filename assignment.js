// find maximum and minimum values

// let array=[2,3,1,5,4,6,7]

// function findMax() {
//     let max = array[0];
//     for(let i = 0;i<array.length;++i ){
//     	if(array[i]>max){
//     		max=array[i]
//     	}
//     }
//     return max
// }
// console.log(findMax())



// function findMin() {
//     let min = array[0];
//     for(let i = 0;i<array.length;++i ){
//     	if(array[i]<min){
//     		min=array[i]
//     	}
//     }
//     return min
// }
// console.log(findMin())

                                    
                                     second max
let arr = [10,20,30,40,50,60,70]
let max=arr[0]
let secmax=arr[0]


function secmaxi(){
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        secmax=max;
        max=arr[i];
    }
    else if(arr[i]>secmax)
    {
        secmax=arr[i]
    }
}
return console.log(secmax);
}
secmaxi()






                                     second min

let arr = [10,20,30,40,50,60,70];
let min=arr[0];
let secmin=arr[0];


function secmini(){
for(let i=0;i<arr.length;i++)
{
    if(min>arr[i])
    {
        secmin=min;
        min=arr[i];
    }
    else if(secmin>arr[i] && arr[i]!=min)
    {
        secmin=arr[i];
    }
}
return console.log(secmin);
}
secmini()




// add elements in an array

// let y=[1,2,3,4,5,6,7,8]
// let sum = y.reduce((y,sum) => y+=sum );
// console.log(sum);



// print all even numbers

// let a = [ 1,2,3,4,5,6,7,8];
// printEven(a);

// function printEven(a){
//     for(let i=0;i<a.length;i++)
//     {
//         if(a[i]%2==0){
//             console.log(a[i]);      
//         }
//     }

//     }



// print all odd numbers

// let b = [ 1,2,3,4,5,6,7,8];
// printOdd(b);

// function printOdd(b){
    
//     for(let i=0;i<b.length;i++)
//     {
//         if(b[i]%2!=0){
//             console.log(b[i]);      
//         }
//     }


//     }






                               palindrome

                               

// let str="madam"
 
//  function ispalindrome(str) {
//     let length=str.length;
//     for(let i=0;i<length/2;i++)
//     {
//         if(str[i]!==str[length - 1 -i])
//         {
//             return 'it is not a palindrome'
//         }
//     }
//     return'it is palindrome'
//  }
// console.log(ispalindrome(str))



                                      fibonacci

// let num=10;
// let n1=0,n2=1,nextTerm;

// for(let i=1; i<=num; i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }


                                     Factorial


// let number=5;
// if(number<0){
//     console.log('enter the correct input');
// }
// else if(number===0){
//     console.log(`the factorial of ${number} is 1` )
// } 
// else{
//     let fact=1;
//     for(i=1;i<=number;i++){
//         fact*=i;
//     }
//     console.log(`the factorial of ${number} is ${fact}` )
// }


   


//find duplicate values

// let a=[1,2,3,4,3,2];
//  function duplicates(a) {
//      return a.filter((item,index)=>a.indexOf(item)===index);
//  }
//  console.log(duplicates(a));




// let a=[1,3,4,2,1,2];
// let b=[5,6,2,4,2,4];
// let c=[...a,...b];

//  function duplicates() {
    
//      return c.filter((item,index)=>c.indexOf(item)===index);
//  }
//  console.log(duplicates(c));

 







                     count how many times the elements are repeated

// let arr=[1,2,3,4,2,1,2,4,3,2,2]
// let count={};

// arr.forEach(function(i) {
//         count[i]=(count[i]||0)+1;
//     });
            
// console.log(count);



                         add even numbers in an array



// let x=[1,2,3,4,5,6,7,10];
// let even=x.filter(x => x%2==0).reduce((x,even) => x+=even);
// console.log(even)




                            add elements in an array




// let y=[1,2,3,4,5,6,7,8]
// let sum = y.reduce((y,sum) => y+=sum );
// console.log(sum);





                                   sorting

// let a=[1,4,6,2,3,7,8,9,10,5]

// for(let i=1;i<a.length;i++)
//     for(let j=0;j<i;j++)
//         if(a[i]<a[j])
//         {
//             var x=a[i];
//             a[i]=a[j];
//             a[j]=x;
//         }
// console.log(a)



                                 convert camelcase to snake case


const c = "AnushaBmGowda"; 

const s = c.split('').reduce( 

    (result, val) => { 

        if (val === val.toUpperCase()) { 

            result += '_'; 

        } 

        return result + val.toLowerCase(); 

    },''); 
console.log(s);



                                  promise static methods


// let promise1 = new Promise((resolve , reject) =>  setTimeout(reject, 5000 , "hello"))
// let promise2 = Promise.reject(45)
// let promise3 = Promise.resolve(10)

// Promise.allSettled([promise1,promise2  ,promise3]).then((out) => console.log(out)).catch((err) => console.log(err))







