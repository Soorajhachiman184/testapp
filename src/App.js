import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes,Link  } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';


import Home from "./Home";

function App() {



  
  return (
    <div className="wrapper">

    <BrowserRouter>
        <Routes  >
          <Route path="/" element={<Home/>} />

         
        </Routes  >
 
    
    </BrowserRouter>


  </div>
  );
}

export default App;
