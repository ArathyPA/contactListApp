import { createSlice } from "@reduxjs/toolkit";
import {UsersData} from "../FakeData";

export const userSlice=createSlice({
    name:"users",
    initialState:{value:UsersData},
    reducers:{
        addUser: (state,action)=>{
             state.value.push(action.payload);
        },
        editUser: (state,action)=>{
            state.value.map((user)=>{if(user.id===action.payload.id){
                if(action.payload.name){
                user.name=action.payload.name;}
                if(action.payload.gender){
                user.gender=action.payload.gender;}
                if(action.payload.contactType){
                user.contactType=action.payload.contactType;}
            }})
        },
        deleteUser: (state,action)=>{
         state.value = state.value.filter((user)=>user.id!==action.payload.id);
        },
        searchUser: (state,action)=>{
            if(action.payload.name!=""){
            state.value = state.value.filter((user)=>user.name.toLowerCase().includes(action.payload.name));
            }
            else{
                state.value=UsersData;
            }
           },
        filterContact: (state,action)=>{

            if(action.payload.contactType==='All'){
                state.value=UsersData;
            }
            else{
            state.value = UsersData.filter((user)=>user.contactType===action.payload.contactType);
            }
           }
    }
})
export const {addUser,deleteUser,editUser,searchUser,filterContact}=userSlice.actions;
export default userSlice.reducer;