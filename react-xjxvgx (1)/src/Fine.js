import React, { Component } from 'react';
import Select from 'react-select'

const fineoptions = [
  { value: 'jan', label: 'january' },
  { value: 'feb', label: 'february' },
  { value: 'march', label: 'march' },
  { value: 'apr', label: 'april' },
  { value: 'may', label: 'may' },
  { value: 'june', label: 'june' },
  { value: 'july', label: 'july' },
  { value: 'august', label: 'august' },
  { value: 'september', label: 'september' },
  { value: 'october', label: 'october' },
  { value: 'november', label: 'november' },
  { value: 'december', label: 'december' }
]


class Fine extends Component {
 state = {
   fee:0,
    fee_calendar:[]
 }
  calChange=(value)=>{
     this.setState({fee_calendar:value})
    
  }
  fineChange=(e)=>{
     this.setState({fee:e.target.value})
  }
  render() {
    return (

      <div >
       <form>
  <label for="fine">
    <span>fine</span>
    <input onChange={this.fineChange}  type="text" id="fee" />
  </label>
 
</form>
 <Select  isMulti onChange={this.onChange} options={fineoptions} />

      </div>
    );
  }
}
export default Fine;
