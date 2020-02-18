import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import  HomePage from './HomePage/HomePage';
import './App.css';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <HomePage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
