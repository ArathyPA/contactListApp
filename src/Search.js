import React from 'react'
import './App.css'
import {searchUser} from './features/Users';

const Search = ({dispatch}) => {
  return (
    <div className='searchUser'>
        <input type="text" placeholder='Search a contact...' onChange={(e)=>{ dispatch(searchUser({name:e.target.value.toLowerCase()}))}}/>
        <button onClick={()=>{}}>Search</button>
      </div>
  )
}

export default Search