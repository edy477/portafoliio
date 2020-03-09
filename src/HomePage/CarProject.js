import React, {useContext, useEffect, useState} from 'react';
import  * as translations from './translations';
import  * as traduccion from './traduccion';
import {LocalContext} from "./Context/LocalContextProvider";
const CardProject = ()=>{
    const [state]= useContext(LocalContext);
    const [name,setName] = useState("");


    return (


        <div className="CardProject">

            {(()=>{
                if(state.translation === "Español/Spanish"){
                    return (
                        <React.Fragment>
                            <h2>Proyect Name</h2>

                            <img className="imageproyect" src="https://storage.googleapis.com/openscreenshot/R%2FA%2Fr/hHO1mrAR.png"/>

                        </React.Fragment>
                    )


                }else if (state.translation === "English"){
                    return (
                        <React.Fragment>

                            <div className="heads">

                                <h1>{translations.Projects.p1}</h1>
                                <h2><a href="https://metheor.edy47.now.sh/">https://metheor.edy47.now.sh/</a> </h2>
                            </div>

                        <div className="platforms">
                            <h2>Platforms:</h2>
                            <h3>{translations.Projects.p2}</h3>

                        </div>
                            <div className="description">
                                <h2>Description: </h2>
                                <p>{translations.Projects.p3}</p>

                            </div>

                            <img className="imageproyect" src="https://storage.googleapis.com/openscreenshot/R%2FA%2Fr/hHO1mrAR.png"/>

                        </React.Fragment>
                    );
                }

            })()}








        </div>




        )





}

export default  CardProject;
