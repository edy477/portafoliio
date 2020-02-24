import React, {useEffect, useState} from 'react';
import {Link,BrowserRouter} from "react-router-dom";
import CardProject from "./CarProject";
const HomePageES = ()=> {
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
                        <p>	&#11090;</p>
                        <span>Electronic and Communications  Engineer</span>


                    </li>

                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>


                    <li>Gmail</li>
                </ul>




            </nav>
            <div className="myName">

                <h2> Jose Eduardo Gomez Perez</h2>
                <br/>
                <span class="linken">


           </span>


                <p>About Me</p>
                <p>dsdsds</p>
                <h1>Education</h1>
                <h3>Universidad Mesoamericana</h3>
                <h4>2013-2019</h4>

                <p>Ingieneria En Telecomunicaciones</p>
                <div className="contents">



                </div>


            </div>
        </div>
    );
}

export default HomePageES;
