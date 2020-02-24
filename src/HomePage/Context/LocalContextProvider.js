import React, { useState, createContext } from 'react';
const LocalContext = React.createContext([{}, () => {}]);

const LocalContextProvider = (props) => {
    const [state, setState] = useState({translation:"English"});
    return (
        <LocalContext.Provider value={[state, setState]}>
            {props.children}
        </LocalContext.Provider>
    );
}

export { LocalContext, LocalContextProvider };
