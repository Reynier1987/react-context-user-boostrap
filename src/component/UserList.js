
import React from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useContext } from "react"
import UseContext from "../context/users/UseContext"



export const UserList = () => {

  let {prueba} =useParams();

  console.log(prueba)
  const { users, getUsers, getProfile } = useContext(UseContext);
  

  useEffect(() => {
    getUsers(prueba)
  }, [prueba])
  
  return (
    <div className=" rounded-3 text-bg-dark p-2">
    <h3 className="text-center text-bg-danger m-0 p-2">User List</h3>
      {users.map((user) => (
       <ul className=" list-group">
          
          <li className=" rounded-0 list-group-item p-3 bg-warning">
            <a href="#!" key={user.id} onClick={() => getProfile(user.id)}>
              {user.first_name} {user.last_name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}
