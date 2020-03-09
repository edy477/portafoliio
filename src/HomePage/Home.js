import React, {useContext, useEffect, useState} from 'react';
import {LocalContext} from "./Context/LocalContextProvider";
import  * as translations from './translations';
import  * as traduccion from './traduccion';
import {Link} from "react-router-dom";

const Home = ()=> {
//    <--/**  <img src={process.env.PUBLIC_URL+'/profile.jpg'}/> **/-->
    const [state]= useContext(LocalContext);
    return(
        <div className="home">


           <div className="image">

           </div>
            <div className="contact">
                <h1>Jose Eduardo Gomez Perez</h1>
                {(()=>{
                    if(state.translation === "Español/Spanish"){
                        return (
                            <React.Fragment>
<h2>Perfil</h2>
                              <h4>{traduccion.About.a1}</h4>

                            </React.Fragment>
                        )


                    }else if (state.translation === "English"){
                        return (

                            <React.Fragment>

                                <h2>About Me</h2>
                                <h4>{translations.About.a1}</h4>

                            </React.Fragment>
                        );
                    }

                })()}





                <h2>Contact </h2>
                <h3><img src="https://img.icons8.com/color/128/000000/linkedin.png" width="40px"/>  <a href="https://www.linkedin.com/in/jose-eduardo-gomez-perez-4a3b8963/">Linkendin</a></h3>
                <h3><img src="https://img.icons8.com/ios/150/000000/github.png" width="40px"/><a href="https://github.com/edy477/">Github</a> </h3>
                <h3>  <a href="#">edy47@mesoamericana.edu.gt</a> </h3>

            </div>


        </div>
    )
};

export default  Home;
