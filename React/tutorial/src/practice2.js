import React, { useEffect, useState } from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);


//     const decrementHandler = () => {
//         setCount((prevCount) => prevCount - 1);
//         setCount((prevCount) => prevCount - 1);
//     }
//     const incrementHandler = () => {
//         setCount((prevCount) => prevCount + 1);
//         // setCount((prevCount) => prevCount + 1);
//         // setCount((prevCount) => prevCount + 1);
//     }
// return (
//     <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <p>Count : {count}</p>
//         <button onClick={decrementHandler}>Decrement</button>
//         </div>
//     );
// };
// export default Counter;

// function FavColor () {
//     const [color, setColor] = useState("red");
    
//     return (
//     <><h1>my favColor is {color}</h1>
//     <button onClick={()=>setColor("green")}>Change</button> 
//      </>
//      )
//     }
// export default FavColor;

// function DataFetching () {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async() => {
//             try{
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//                 const result = await response.json();
//                 setData(result);
//                 }
//             catch (error) {
//                 console.log("error in fetching",error)
//             }
//         }
//         fetchData();
//     });
//     return (
//         <>
//         <ul>
//             {
                
//                 data.map((item)=>(<li>{item.title}</li>))
//             }
//         </ul>
//         </>
//     )
// }

// export default DataFetching

// function DataFetching(){
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(Response=>Response.json)
//         .then(data=>console.log(data))
//     },[]);
//     return (
//         <div>different ways to fetch</div>
//     )
// }
// export default DataFetching;






function DataFetch () {
    const[data, setData] = useState([]);

    useEffect(() => {
        const fetchingData = async() => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);

            }
            catch(error) {
                console.log("error ",error)
            }
        }
    fetchingData();
    })
    return (
        <>
        <div>{
            data.map((item) => (<li>{item.title}</li>))
             }    
        </div>
        </>
    )
}

export default DataFetch;