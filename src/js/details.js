import React, {useState, useEffect} from "react";
import FetchedCompanies from "./fetchedCompanies";
import { HashRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import Input from "./input";

const Details = ({companies, match}) => {

    const idDet = parseInt(match.params.id);
    console.log(match);

    const cName = [];
    const cID = [];
    const cCity = [];
    const cIncome = [];

    let cInfo = null;

    companies.forEach(company => {
        if(company.id===idDet){
            cName.push(company.name);
            cID.push(company.id);
            cCity.push(company.city);
            cIncome.push(company.incomes);

            cInfo = company;
        }
    });
    console.log(cInfo);
    console.log(cIncome);

    const iAvg = [];
    const iTot = [];
    const iLast = [];
    cIncome.forEach(income => {
        iAvg.push(income.avg);
        iTot.push(income.total);
        iLast.push(income.newestVal)
    });

    return (
        <>
            <section className="position">
                <p className="header">Company <strong>{cName}</strong> details:</p>
                    <ul className="list_style">
                        <li className="list_point">ID number: <strong>{idDet}</strong></li>
                        <li className="list_point">City: <strong>{cCity}</strong></li>
                        <li className="list_point">Incomes:
                            <ul>
                                <li className="list_point">Average incomes: <strong>{iAvg}</strong></li>
                                <li className="list_point">Total income: <strong>{iTot}</strong></li>
                                <li className="list_point">Last income: <strong>{iLast}</strong></li>
                            </ul>
                        </li>
                    </ul>
            <Link className="undo" style={{textDecoration: 'none', color: 'black', fontWeight: '550'}} to="/">Go Back</Link>
            </section>
        </>
    )
};

export default Details;