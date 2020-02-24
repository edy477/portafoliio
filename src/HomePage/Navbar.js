import React,{useEffect,useState,useContext} from 'react';
import {LocalContext} from "./Context/LocalContextProvider";
import  * as translations from './translations';
import  * as traduccion from './traduccion';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Navbar = ()=>{

     const [state] = useContext(LocalContext);
     console.log(state);
return(
    <nav className="navbar">


        <ul className="first">
            <li className="lifirst">
                <h2>Jose Eduardo Gomez Perez</h2>

                <span>Electronic and Communications  Engineer</span>


            </li>
            {(()=>{
                if(state.translation === "Español/Spanish"){
                    return (
                        <React.Fragment>

                        <li> <Link to="/">{traduccion.Menu.C1}</Link> </li>
                        <li><Link to="/skills">{traduccion.Menu.C3}</Link></li>

                        </React.Fragment>
                    )


                }else if (state.translation === "English"){
                    return (
                        <React.Fragment>
                            <li> <Link to="/">{translations.Menu.C1}</Link> </li>
                            <li><Link to="/skills">{translations.Menu.C3}</Link></li>

                        </React.Fragment>
                    );
                }

            })()}

        </ul>


        <ul>
            <li>{state.translation}</li>
        </ul>
        <React.Fragment>
          <ul>


          </ul>
        </React.Fragment>


    </nav>
);

};
export default Navbar;
