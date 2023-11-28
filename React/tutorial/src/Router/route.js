import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const Home = () =><h2>Home</h2>;
const About = () =><h2>About</h2>;
const Contact = () =><h2>Contact</h2>;


const App = () => {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to ="/home">Home</Link>
                        </li>
                        <li>
                            <Link to ="/About">About</Link>
                        </li>
                        <li>
                            <Link to ="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <hr/>
                <hr/>
<Routes>
    <Route path ="/home" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/contact" element={<Contact/>}/>
</Routes>
            </div>
        </Router>
    );
};
export default App;