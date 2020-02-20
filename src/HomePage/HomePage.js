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


<ul className="first">
    <li className="lifirst">
        <h2>Jose Eduardo Gomez Perez</h2>
        <span>Electronic and Communications  Engineer</span>

    </li>

    <li>Home</li>
<li>Projects</li>
    <li>Skills</li>
</ul>


                <img src="https://img.icons8.com/ios/100/000000/github.png"/>

            </nav>
        <div className="myName">
            <h1>{name}</h1>
            <p>my name is Jose Eduardo Gomez Perez</p>
            <p>About Me</p>
            <p>dsdsds</p>
            <h1>Education</h1>

            <div className="contents">

                <h2>Projects</h2>
                <CardProject/>
            </div>


        </div>
        </div>
    );
}

export default HomePage;
