import React,{useEffect,useState,useContext} from 'react';
import {LocalContext} from "./Context/LocalContextProvider";
import  * as translations from './translations';
import  * as traduccion from './traduccion';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Navbar = ()=>{
//  <li><a href="#"><img src="https://img.icons8.com/ios/150/000000/github.png"/></a></li>
     const [state] = useContext(LocalContext);
     console.log(state);
return(
    <nav className="navbar">


        <ul className="first">
            <li className="lifirst">
                <h2>Jose Eduardo Gomez Perez</h2>

                <img className="profile" src={process.env.PUBLIC_URL+'/profile.jpg'} />

<br/>
                <span>Software Developer / Electronic and Communications  Engineer</span>
                <br/>

            </li>
<br/>


            {(()=>{
                if(state.translation === "Español/Spanish"){
                    return (
                        <React.Fragment>

                        <li> <Link to="/">{traduccion.Menu.C1}</Link> </li>
                        <li><Link to="/skills">{traduccion.Menu.C3}</Link></li>
                            <li><Link to="/proyects">{traduccion.Menu.C2}</Link></li>
                        </React.Fragment>
                    )


                }else if (state.translation === "English"){
                    return (
                        <React.Fragment>
                            <li> <Link to="/">{translations.Menu.C1}</Link> </li>
                            <li><Link to="/skills">{translations.Menu.C3}</Link></li>
                            <li><Link to="/proyects">{translations.Menu.C2}</Link></li>
                        </React.Fragment>
                    );
                }

            })()}
<br/>

            <li>                <a href="https://www.linkedin.com/in/jose-eduardo-gomez-perez-4a3b8963/"><img src="https://img.icons8.com/color/128/000000/linkedin.png" width="40px"/></a>
                <a href="https://github.com/edy477/"> <img  className="gits" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="30px"/></a>
                <a className="gmails" href = "mailto: edy47@mesoamericana.edu.gt"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrS8N3y34GkFvma2MV6h-3IRpZ0JG7VQnOwRfkYqzEH5u9KNh&s" width="30px"/></a>
            </li>
        </ul>





    </nav>
);

};
export default Navbar;
