import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
const Expenses =(props)=>{
    const [selectedYear,setSelectedYear]=useState("2021");
    const FilterExpenseHandler =(selectedYear)=>{
        setSelectedYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
      });
    return(
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterExpense={FilterExpenseHandler}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    );
}
export default Expenses;