import React, {useContext, useEffect, useState} from 'react';
import {LocalContext} from "./Context/LocalContextProvider";
import  * as translations from './translations';
import  * as traduccion from './traduccion';
const EducationCard = ()=> {
    const [state]= useContext(LocalContext);
    return(

        <div className="education">
            {(()=>{
                if(state.translation === "Español/Spanish"){
                    return (
                        <React.Fragment>


                            <h1 className="title">Educacion</h1>

                            <div className="ims">
                                <img src="https://www.mesoamericana.edu.gt/wp-content/uploads/2012/01/Logo-Meso-Color-300x283.png" width="100px"/>
                                <br/>
                                <img src="https://www.mesoamericana.edu.gt/wp-content/uploads/2018/02/Nuevo-Logo-IUS.png" width="100px"/>
                                <br/>
                                <img className="intecap" src="https://www.intecap.edu.gt/centros/centroquetzaltenango/wp-content/uploads/sites/29/2019/01/logo-intecap-2.png" width="100px"/>
                            </div>

<div className="contentcard">

    <h1>{traduccion.Educación.e2}</h1>
    <h2><b>{traduccion.Educación.e3}</b></h2>
    <h2><b>{traduccion.Educación.e1}</b></h2>
    <br/>
    <br/>
    <br/>
    <h1>{traduccion.Educación.e5}</h1>
    <h3>{traduccion.Educación.e6}</h3>
    <h2>{traduccion.Educación.e4}</h2>
    <br/>
    <h1>{traduccion.Educación.e8}</h1>
    <h2>{traduccion.Educación.e9}</h2>
    <h2>{traduccion.Educación.e7}</h2>

</div>
                            <div className="skillscard">

                                <h1 className="skills">Aptitudes y Habilidades</h1>

                                <i className="devicon-amazonwebservices-plain-wordmark"></i>
                                <i className="devicon-apache-line-wordmark colored"></i>

                                <i className="devicon-c-plain colored"></i>
                                <i className="devicon-csharp-plain colored"></i>
                                <i className="devicon-cplusplus-plain-wordmark colored"></i>
                                <i className="devicon-css3-plain-wordmark colored"></i>
                                <i className="devicon-docker-plain colored"></i>
                                <i className="devicon-java-plain-wordmark colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-git-plain-wordmark colored"></i>
                                <i className="devicon-python-plain-wordmark"></i>
                                <i className="devicon-php-plain colored"></i>
                                <i className="devicon-redhat-plain-wordmark colored"></i>
                                <i className="devicon-postgresql-plain-wordmark colored"></i>
                                <i className="devicon-mysql-plain colored"></i>
                                <i className="devicon-mongodb-plain colored"></i>
                                <i className="devicon-linux-plain colored"></i>
                                <i className="devicon-nginx-original colored"></i>
                                <i className="devicon-rails-plain colored"></i>
                            </div>

                        </React.Fragment>
                    )


                }else if (state.translation === "English"){
                    return (
                        <React.Fragment>
                            <h1 className="title">Education</h1>

                            <div className="ims">
                                <img src="https://www.mesoamericana.edu.gt/wp-content/uploads/2012/01/Logo-Meso-Color-300x283.png" width="100px"/>
                                <br/>
                                <img src="https://www.mesoamericana.edu.gt/wp-content/uploads/2018/02/Nuevo-Logo-IUS.png" width="100px"/>
                                <br/>
                                <img className="intecap" src="https://www.intecap.edu.gt/centros/centroquetzaltenango/wp-content/uploads/sites/29/2019/01/logo-intecap-2.png" width="100px"/>
                            </div>
<div className="contentcard">
    <h1>{translations.Education.e2}</h1>
    <h2>{translations.Education.e3}</h2>

    <h2>{translations.Education.e1}</h2>
<br/>
    <br/>
    <br/>
    <h1>{translations.Education.e5}</h1>
    <h3>{translations.Education.e6}</h3>
    <h2>{translations.Education.e4}</h2>
    <br/>
    <h1>{translations.Education.e8}</h1>
    <h2>{translations.Education.e9}</h2>
    <h2>{translations.Education.e7}</h2>


</div>
<div className="skillscard">
    <h1 className="skills">Skills</h1>

    <i className="devicon-amazonwebservices-plain-wordmark"></i>
    <i className="devicon-apache-line-wordmark colored"></i>

    <i className="devicon-c-plain colored"></i>
    <i className="devicon-csharp-plain colored"></i>
    <i className="devicon-cplusplus-plain-wordmark colored"></i>
    <i className="devicon-css3-plain-wordmark colored"></i>
    <i className="devicon-docker-plain colored"></i>
    <i className="devicon-java-plain-wordmark colored"></i>
    <i className="devicon-javascript-plain colored"></i>
    <i className="devicon-git-plain-wordmark colored"></i>
    <i className="devicon-python-plain-wordmark"></i>
    <i className="devicon-php-plain colored"></i>
    <i className="devicon-redhat-plain-wordmark colored"></i>
    <i className="devicon-postgresql-plain-wordmark colored"></i>
    <i className="devicon-mysql-plain colored"></i>
    <i className="devicon-mongodb-plain colored"></i>
    <i className="devicon-linux-plain colored"></i>
    <i className="devicon-nginx-original colored"></i>
    <i className="devicon-rails-plain colored"></i>

</div>
                        </React.Fragment>
                    )
                }

            })()}

        </div>
    )

};
export default EducationCard;
