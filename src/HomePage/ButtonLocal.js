import React, {useContext, useEffect, useState} from 'react';
import {LocalContext} from "./Context/LocalContextProvider";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const ButtonLocal = ()=>{

    const [state,setState]= useContext(LocalContext);
const clicked = (e) => {
   // e.preventDefault();
  //  console.dir(e.target);
  setState({translation:e.target.innerText});


    };


    return(

        <nav role="selected">




                    <ul className="dropdown">
                        <li value="Español" onClick={clicked}><a href="#" name="es" >Español/Spanish</a></li>
                        <li value="Spanish" onClick={clicked}><a href="#" name="en">English</a></li>
                    </ul>



        </nav>
    )
};
export default  ButtonLocal;


