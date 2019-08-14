import React from "react";
export default class Expenses extends React.Component{
  constructor(props){
    super(props);
    // Expense data will be given as one long string formatted like this: "ATM:10 Gas:45.21 McDonald's:8.49"
    console.log(this.props.expenses);
  }

  render(){
    
    return (
      <table>
        <thead>
          <tr>
            {/* You are not expected to get through this entire exercise in an hour, but the entire thing will make good practice */}

            {/* Phase 1: The name of the expense, how many times that expense occurred, and the total spent on it */}
            {/* We want this for the entire collection of all expenses, as well as broken down by type */}
            <th>Name</th>
            <th>Count</th>
            <th>Total</th>

            {/* Phase 2: Add the Average(Mean), Min, and Max for each type */}
            {/* <th>Average (Mean)</th>
            <th>Min</th>
            <th>Max</th> */}

            {/* Phase 3-Bonus: Add Median and Mode for each type */}
            {/* <th>Median</th>
            <th>Mode</th> */}
          </tr>
        </thead>
        <tbody>
          {/* We want a row for all expenses for the month, plus one row for each specific expense, i.e. how much was withdrawn from an ATM */}
          <tr>
            <td>All Expenses</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>ATM</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  }
}