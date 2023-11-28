
// let promise1 = new Promise((resolve , reject) =>  setTimeout(reject, 5000 , "hello"))
// let promise2 = Promise.reject(45)
// let promise3 = Promise.resolve(10)

// Promise.allSettled([promise1,promise2  ,promise3]).then((out) => console.log(out)).catch((err) => console.log(err))



// destructing

// let num = [1,2,3,4,5,6,7]
// let [one,two,...rest]=num;
// console.log(rest)


const c = "AnushaBmGowda"; 

const s = c.split('').reduce( 

    (result, val) => { 

        if (val === val.toUpperCase()) { 

            result += '_'; 

        } 

        return result + val.toLowerCase(); 

    },''); 
console.log(s);




