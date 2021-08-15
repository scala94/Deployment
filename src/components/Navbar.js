import React from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";


const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-band" href="/home"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#F1DEB4" }} />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home" >Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/info">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <Switch>
                    <Route path="/info">
                        <Info />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar
