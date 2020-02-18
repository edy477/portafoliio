import React, {useEffect, useState} from 'react';
import {Link,BrowserRouter} from "react-router-dom";
import CardProject from "./CarProject";
const HomePage = ()=> {
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    useEffect(()=>{
        setName("Jose Eduardo Gomez Perez")
    });

    return(

        <div className="HomePage">
            <nav>


            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/dashboard">Contact</Link>
                </li>
            </ul>
            </nav>
        <div className="myName">
            <h1>{name}</h1>
            <p>my name is Jose Eduardo Gomez Perez</p>
            <CardProject/>

        </div>
        </div>
    );
}

export default HomePage;
