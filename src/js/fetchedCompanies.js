import React, { useEffect, useState, useRef} from "react";
import ReactDOM from "react-dom";
import Income from "./incomes";
import Input from "./input";
import { HashRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import Details from "./details";
const FetchedCompanies = () => {
    const [companies, setCompanies] = useState({});
    const [loadedCompanies, setLoadedCompanies] = useState(false);
    const unmounted = useRef(false);

    useEffect(() => {
        fetch(`https://recruitment.hal.skygate.io/companies`)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                data.map((company, key) => {
                    Income(company)
                        .then((incomes) => {
                            company.incomes = incomes;
                            if (data.length - 1 === key && !unmounted.current) {
                                setCompanies(data);
                                setLoadedCompanies(true);
                            }
                        })
                        .catch((err) => console.log(err));
                });
            });
        return () => { unmounted.current = true }
    }, [loadedCompanies]);

    if (loadedCompanies === false) return <p>Wait...</p>;
    companies.sort((a, b) => (b.incomes.total - a.incomes.total));


    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => <Input companies={companies} setCompanies={setCompanies}/>}/>
                    <Route path="/:id" render={props => <Details companies={companies} setCompanies={setCompanies} {...props} />}/>
                </Switch>
            </HashRouter>
        </>
    );
};

export default FetchedCompanies;
