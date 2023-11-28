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