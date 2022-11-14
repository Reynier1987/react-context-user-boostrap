import React from "react"
import { useContext } from "react"
import UseContext from '../context/users/UseContext'

export const Profile = () => {

  const { selectUser } = useContext(UseContext);
  
  return (
    <div className="border-2 w-100">

      {selectUser ? (
        <div className="card bg-dark p-2 text-center" style={{width:323}}>
          <div className=" card-body text-bg-danger">
            <h4 className="card-title mt-0">
              Name: {selectUser.first_name} {selectUser.last_name}
            </h4>
            <h6 className=" card-subtitle mb-1">Email:{selectUser.email}</h6>
            </div>
          
          <img className=" w-auto mt-0 mb-0 p-0" src={selectUser.avatar}></img>
        </div>
      ) : (
        <h1>No user profile</h1>
      )}
    </div>
  );
}
