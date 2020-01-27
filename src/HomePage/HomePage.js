import React, {useEffect, useState} from 'react';

const HomePage = ()=> {
    const [title,setTitle] = useState("");
    const [name,setName] = useState("");
    useEffect(()=>{
        setName("Jose Eduardo Gomez Perez")
    });

    return(


        <h1>{name}</h1>

    );
}

export default HomePage;
