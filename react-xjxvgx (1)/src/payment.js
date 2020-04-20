import React, { Component } from 'react';
import Select from 'react-select';
import MonthlyReport from "./MonthlyReport";

const options = [
  { value: 'january', label: 'january' },
  { value: 'february', label: 'february' },
  { value: 'march', label: 'march' },
  { value: 'april', label: 'april' },
  { value: 'may', label: 'may' },
  { value: 'june', label: 'june' },
  { value: 'july', label: 'july' },
  { value: 'august', label: 'august' },
  { value: 'september', label: 'september' },
  { value: 'october', label: 'october' },
  { value: 'november', label: 'november' },
  { value: 'december', label: 'december' }
]
const payOptions = [
  { value: 'cash in hand', label: 'cash in hand' },
  { value: 'cheque', label: 'cheque' },
  { value: 'online payment', label: 'online payment' }
]
class payment extends Component {
 state = {

   paid:0,
   remarks:'',
   phone_no:0,
   calendar:[],
   payMethod:'',

 }
  payOnChange=(value)=>{
     this.setState({payMethod:value})
    
  }
  onChange=(value)=>{
     this.setState({calendar:value})
    
  }
  textChange=(e)=>{
     this.setState({paid:e.target.value})
  }
  phoneNumber=(e)=>{
     this.setState({phone_no:e.target.value})
  }
  remarkChange=(e)=>{
     this.setState({remarks:e.target.value})
  }
   display = () => {
    const payload = [];
   
   
     payload.push({
        month: this.state.calendar.value,
       
        paid: this.state.paid,
        
      })
    ;
    
    console.log(payload);
    this.setState({ payloadData: payload });
  };
 

   render() {
    return (

      <div >
     
      <form>
         <label for="">
            <span>paid</span>
             <input onChange={this.textChange}  type="text" id="paid" />
        </label>
        <br/>
         <Select  onChange={this.payOnChange} options={payOptions} />
        <label for="phone number">
      

         </label>
         
          <label for="remarks">
            <span>remarks</span>
             <input onChange={this.remarkChange}  type="text" id="paid" />
        </label>
</form>
<br />
select payment month
  <Select  onChange={this.onChange} options={options} />
  <br />
          <input type="button" onClick={this.display} value="submit" />
        <br />
       

      </div>
    );
  }
}
export default payment;
