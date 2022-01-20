import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses =(props)=>{
    const [selectedYear,setSelectedYear]=useState("2021");
    const FilterExpenseHandler =(selectedYear)=>{
        setSelectedYear(setSelectedYear);
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterExpense={FilterExpenseHandler}/>
        </Card>
    );
}
export default Expenses;