import './App.css';
import React from 'react';
//mport 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import Wsb from './Components/Wsb';
import Homepage from './Components/Homepage';
import { Routes, Route} from 'react-router-dom'
import Basics from './Components/Basics';
//import { propTypes } from 'react-bootstrap/esm/Image';

function App() {
  return (
    //<BrowserRouter>
      <div className='header'>
        <Routes>
          <Route path= '*' element={<Homepage/>}/>
          <Route path= '/' element={<Homepage/>}/>
          <Route path='Home' element={<Homepage/>}/>
          <Route path='Wsb' element={<Wsb/>}/>
          <Route path='Basics' element={<Basics/>}/>
        </Routes>
      </div>
    //</BrowserRouter>
  );
}

export default App;
