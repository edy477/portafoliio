import React, {useEffect, useState,useContext} from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import CardProject from "./CarProject";
import ButtonLocal from "./ButtonLocal";
import  * as translations from './translations';
import  * as traduccion from './translations';
import EducationCard from "./EducationCard";
import Navbar from "./Navbar";
import Home from "./Home";


import {LocalContextProvider} from "./Context/LocalContextProvider";
import {LocalContext} from "./Context/LocalContextProvider";

const HomePage = ()=> {

    const [states] = useState({translation: "English"});
    const state = useContext(LocalContext);
const [title,setTitle] = useState("");
const [name,setName] = useState("");
console.log(state.translations);
useEffect(()=>{
    setName("Jose Eduardo Gomez Perez")
});

return(
    <Router>


<LocalContextProvider value={states}>


    <div className="HomePage">
    <Navbar/>
        <div className="myName">


<ButtonLocal/>
<br/><br/><br/><br/>
            <div className="contents">


                <Route exact path="/skills" component={EducationCard}/>
                <Route exact path="/proyects" component={CardProject}/>
                <Route exact path="/" component={Home}/>
            </div>


        </div>
    </div>

</LocalContextProvider>
    </Router>
);
}

export default HomePage;
