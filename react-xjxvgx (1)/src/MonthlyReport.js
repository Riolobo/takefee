import React, { Component } from 'react';  
import ReactTable from 'react-table';  
  
class MonthlyReport extends Component {  
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         reports: [
            { month: 'April', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'May', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'June', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
             { month: 'July', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'August', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'September', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'OCTOBER', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
            { month: 'November', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
             { month: 'December', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
              { month: 'January', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
               { month: 'February', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
                { month: 'March', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 },
           
         ]
       //  report :props.data
      }
   }
  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      let reports = [];
      this.state.reports.forEach(item => {
        let findItem = this.props.data.find(
          item1 => item1.month.toLowerCase() === item.month.toLowerCase()
          
        );
        findItem ? reports.push(findItem) : reports.push(item);
      });
      this.props.data && this.setState({ reports });
    }
  }



    renderTableData() {
      return this.state.reports.map((report, index) => {
         const { month,fee,consession,fine,total,paid,due } = report //destructuring
         return (
            <tr key={month}>
               <td>{month}</td>
               <td>{fee}</td>
               <td>{consession}</td>
               <td>{fine}</td>
               <td>{total}</td>
               <td>{paid}</td>
                <td>{due}</td>
            </tr>
         )
      })
   }
    renderTableHeader() {
      let header = Object.keys({ month: 'april', fee:0, consession: 0, fine: 0,total:0,paid:0,due:0 })
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
  render() {

      return (
         <div>
            <h1 id='title'>Monthly Reports</h1>
            <table id='students'>
               <tbody>
                //<tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
  }  
export default MonthlyReport;