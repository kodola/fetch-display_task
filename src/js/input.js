import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Pagination from "./pagination";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import Details from "./details";

const Input = ({match, companies}) => {
    const [name, setName] = useState(" ");

    const [chosenPage, setChosenPage] = useState(1);
    const [companiesPerPage] = useState(20);

    const results = [];
    const companyNames = companies.filter(company => {
            if (company.name.includes(name) || company.name.toLowerCase().includes(name)
                || company.name.toUpperCase().includes(name)) {
                results.push(company);
            }
    });
    console.log(results);

    // Pagination
    const indexOfLastCompany = chosenPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;

    //Set next page
    const paginate = pageNumber => setChosenPage(pageNumber);

    const handleSearch = (e) => {
        setName(e.target.value);
    };
    console.log(name);


    const objTab = [];
    const clicked = (item) => {
        companies.forEach(company => {
            if (company.name===item) {
                objTab.push(company);
                console.log(objTab);
            }
        });
        console.log(item);
    };

    return (
        <>
            <section className="viewport">
                <div className="table_header">
                    <p className="table_name">Table</p>
                    <form className="form">
                    <label>Look for a name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleSearch}
                    />
                    </form>
                </div>
            <table>
                <thead>
                    <tr className="header_row row">
                        <th className="column_element">Company name</th>
                        <th className="column_element">Id</th>
                        <th className="column_element">City</th>
                        {/*<th className="column_element">Average income</th>*/}
                        <th className="column_element">Sum of incomes</th>
                        {/*<th className="column_element">Newest income</th>*/}
                    </tr>
                </thead>
                <tbody>
                {results.slice(indexOfFirstCompany, indexOfLastCompany).map((result) => (
                    <tr className="row table_row" key={result.id}>
                        <td className="column_element" onClick={()=> clicked(result)}>
                            <Link style={{textDecoration: 'none', color: 'black', fontWeight: '550'}} to={"/"+result.id} >
                            <p>{result.name}</p>
                            </Link>
                        </td>
                        <td className="column_element">
                            <p>{result.id}</p>
                        </td>
                        <td className="column_element">
                            <p>{result.city}</p>
                        </td>
                        {/*<td className="column_element">*/}
                        {/*    <p>{result.incomes ? result.incomes.avg : "error"}</p>*/}
                        {/*</td>*/}
                        <td className="column_element">
                            <p>{result.incomes ? result.incomes.total : "error"}</p>
                        </td>
                        {/*<td className="column_element">*/}
                        {/*    <p>{result.incomes ? result.incomes.newestVal : "error"}</p>*/}
                        {/*</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination companiesPerPage={companiesPerPage} totalCompanies={companies.length} onPaginate={paginate}/>
            </section>
        </>
    );
};
export default Input;