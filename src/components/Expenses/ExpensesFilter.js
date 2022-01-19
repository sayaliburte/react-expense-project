import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter =(props)=>{
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select onChange={()=>{}}>
                    <option value='2023'>2023</option>
                    <option value='2023'>2022</option>
                    <option value='2023'>2021</option>
                    <option value='2023'>2020</option>
                    <option value='2023'>2019</option>
                </select>
            </div>
        </div>
    );
}
export default ExpensesFilter;