import React, { Component } from "react";
import Select from "react-select";
import MonthlyReport from "./MonthlyReport";


const options = [
  { value: "January", label: "january" },
  { value: "Feruary", label: "february" },
  { value: "March", label: "march" },
  { value: "April", label: "april" },
  { value: "May", label: "may" },
  { value: "June", label: "june" },
  { value: "July", label: "july" },
  { value: "August", label: "august" },
  { value: "September", label: "september" },
  { value: "October", label: "october" },
  { value: "November", label: "november" },
  { value: "December", label: "december" }
];

const fineoptions = [
  { value: "January", label: "january" },
  { value: "Feruary", label: "february" },
  { value: "March", label: "march" },
  { value: "April", label: "april" },
  { value: "May", label: "may" },
  { value: "June", label: "june" },
  { value: "July", label: "july" },
  { value: "August", label: "august" },
  { value: "September", label: "september" },
  { value: "October", label: "october" },
  { value: "November", label: "november" },
  { value: "December", label: "december" }
];

class FeeComponent extends Component {
  state = {
    fee: 0,
    comission: 0,
    calendar: [],
    payloadData: [],
    fine: 0,
    fee_calendar: []
  };
  onChange = value => {
    this.setState({ calendar: value });
  };
  textChange = e => {
    this.setState({ fee: e.target.value });
  };
   setComission = e => {
    this.setState({ comission: e.target.value });
  };
  calChange = value => {
    this.setState({ fee_calendar: value });
  };
  fineChange = e => {
    this.setState({ fine: e.target.value });
  };
  display = () => {
    const payload = [];
    const total =
      parseInt(this.state.fee) +
      parseInt(this.state.comission) +
      parseInt(this.state.fine);
    this.state.calendar.map(item =>
      payload.push({
        month: item.value,
        fee: this.state.fee,
        consession: this.state.comission,
        fine: this.state.fine,
        total: total,
        paid: "",
        due: ""
      })
    );
    console.log(payload);
    this.setState({ payloadData: payload });
  };
 

  render() {
    return (
      <div>
        <form>
          <label for="fee">
            <span>fee</span>
            <input onChange={this.textChange} type="text" id="fee" />

            <span>comission</span>
            <input onChange={this.setComission} type="text" id="comission" />
            <span>fine</span>
            <input onChange={this.fineChange} type="text" id="fee" />

          
            <br />
          </label>
        </form>
        <br />
         select month
        <Select isMulti onChange={this.onChange} options={fineoptions} />
        <br />
          <input type="button" onClick={this.display} value="submit" />
        <br />
        <MonthlyReport data={this.state.payloadData} />
      </div>
    );
  }
}
export default FeeComponent;
