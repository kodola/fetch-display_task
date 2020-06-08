import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import FetchedCompanies from "./fetchedCompanies";
import '../scss/main.scss';

const App = () => {

    return (
    <>
        <FetchedCompanies/>
    </>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));
