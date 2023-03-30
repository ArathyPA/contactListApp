import React from 'react'
import './App.css'
import { filterContact } from './features/Users';

const Filter = ({dispatch}) => {
  return (
    <div className='filter'>
    <label for="type" style={{color:"white"}}>Choose contact type:</label>
<select name="type" id="type" onChange={(e)=>{console.log(e.target.value); dispatch(filterContact({contactType:e.target.value}))}}>
<option value="All">All</option>
  <option value="Business">Business</option>
  <option value="Personal">Personal</option>   
</select>
    </div>
  )
}

export default Filter