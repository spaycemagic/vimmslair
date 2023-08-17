import React, { Component } from "react";

import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Consoles from "./Consoles";
import Handhelds from "./Handhelds";
import Emulair from "./Emulair.js";

import './Emulators.css';

import Logo from '../Logo/Logo.js';


class Emulators extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <Logo />
            <h1>Vimms Vault</h1>
            <ul className="header">
                <li><NavLink to="/consoles">Consoles</NavLink></li>
                <li><NavLink to="/handhelds">Handhelds</NavLink></li>
                <li><NavLink to="/emulair">Emulation Lair</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
                <Route path="/consoles" element={<Consoles />}/>
                <Route path="/handhelds" element={<Handhelds />}/>
                <Route path="/emulair" element={<Emulair />}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
    );
  }
}



export default Emulators;