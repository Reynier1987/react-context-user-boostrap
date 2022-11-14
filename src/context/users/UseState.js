import React from "react";
import { useReducer } from "react";
import  UseReducer from './UseReducer'
import UseContext from './UseContext'
import axios from "axios";

const UseState = (props) => {
  const initialState = {
    users: [],
    selectUser: null,
  };
  const [state, dispatch] = useReducer(UseReducer, initialState )

  const getUsers = async (id) => {
          const res = await axios.get("https://reqres.in/api/users?page="+ id);
          dispatch({ 
            type: 'GET_USERS',
            payload: res.data.data
          })
            

  };

  const getProfile = async (id) => {
    const res = await axios.get("https://reqres.in/api/users/"+ id)
       dispatch (
        {
          type: 'GET_PROFILES',
          payload:res.data.data
        })
  };
 
  return (
    <UseContext.Provider value={{
        users:state.users,
        selectUser:state.selectUser,
        getUsers,
        getProfile,
       }}>
      <div>
        {props.children}
      </div>
      </UseContext.Provider>
  )
  
};

export default UseState;

