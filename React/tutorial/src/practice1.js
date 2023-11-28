import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// function Child1(){
//     return<h1>functional component child1</h1>;
// }
// function Child2(){
//     return<h1>functional component child2</h1>;
// }  
// function Parent(){
//     return ( <> <Child2/><Child1/> </> );
// }

// function ListComponent(){
//     const items=["child1","child2","child3","child4"]
//     return(
//         <ul>
//             {
//                 items.map((items,index)=>(<li>{items}</li>))
//             }
//         </ul>
//     );
// }


// function Duplicate(){
//     const a=['anu','anusha','anu','gowda','anu'];
//     const out=a.filter((item,index)=>a.indexOf(item)===index)
//     return (
//         <h1>
//             {
//                 <li>{out}</li>
//             }
//         </h1>
        
//     )
// }




// function  Person1(){
//     return <p>component:Person1</p>;
// }

// function  Person2(){
//     return <p>component:Person2</p>;
// }

// function  Person3(){
//     return <p>component:Person3</p>;
// }

// function Parent(){
//     return (<> <Person1/><Person2/><Person3/></>);


// function Fetch = async () => {
//     try{

//    const response=  fetch("https://jsonplaceholder.typicode.com/posts")
//    const out = response.json

//     }
// }
//     return <></>




const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Parent/>);
// root.render(<ListComponent/>);
// root.render(Duplicate());
// root.render(<Parent/>);
// root.render(<Fetch/>);
