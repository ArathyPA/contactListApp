import './App.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addUser,deleteUser,editUser} from './features/Users';
import { useDispatch } from 'react-redux';
import maleprofile from './images/maleProfile.jpg';
import femaleprofile from './images/femaleProfile.jpg';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';
import StatisticsCard from './StatisticsCard';
import Filter from './Filter';


function App() {
   const dispatch=useDispatch();
  const userList=useSelector((state)=>state.users.value)
  const [name,setName]=useState("");
  const [contactType,setcontactType]=useState("");
  const [gender,setGender]=useState("");
  const [newName,setNewname]=useState("");
  const [newcontactType,setNewcontactType]=useState("");
  const [newGender,setNewGender]=useState("");
 
  return (
    <div className="App">
      <Header/>
      <Search dispatch={dispatch}/>
      <StatisticsCard userList={userList}/>
      <div className='addUser'>       
        <input type="text" placeholder='Enter a name' onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder='Enter contact type' onChange={(e)=>{setcontactType(e.target.value)}}/>
        <input type="text" placeholder='Enter Gender' onChange={(e)=>{setGender(e.target.value)}}/>
        <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id+1,name,contactType,gender}))}}>Add New Contact</button>
      </div>
      
      <Filter dispatch={dispatch}/>
      
      <div className='displayUser'>
      {userList.map((user)=>{
        return <div className="userCard"> 
                 <div>{(user.gender.toLowerCase()==='male')?<img src={maleprofile} className="profileImg"/>:
          <img src ={femaleprofile} className="profileImg"/>}</div>
               <div>
               <h1>{user.name}</h1>
                 <h3>{user.contactType}</h3> <h4>{user.gender}</h4>
                 <input type="text" placeholder='Enter name' onChange={(e)=>{setNewname(e.target.value)}}/>
                 <input type="text" placeholder='Enter contact type' onChange={(e)=>{setNewcontactType(e.target.value)}}/>
                 <input type="text" placeholder='Enter Gender' onChange={(e)=>{setNewGender(e.target.value)}}/>
                 <button onClick={()=>{dispatch(editUser({id:user.id,name:newName,contactType:newcontactType,gender:newGender}))}}>Update</button>
                 <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete</button>
               </div>
                 </div>
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
