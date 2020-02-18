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
            <nav className="navbar">


<ul>
    <li>   <h4>Jose Eduardo Gomez Perez</h4>
    </li>

    <li>Home</li>
    <li>Skills</li>

</ul>

            </nav>
        <div className="myName">
            <h1>{name}</h1>
            <p>my name is Jose Eduardo Gomez Perez</p>
            <div className="contents">

                <h2>Projects</h2>
                <CardProject/>
            </div>


        </div>
        </div>
    );
}

export default HomePage;
