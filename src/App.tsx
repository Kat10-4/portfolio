import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Home} from "./layout/sections/home/Home";
import {About} from "./layout/sections/about/About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
        </div>
    );
}

export default App;
