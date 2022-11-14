import React from 'react'
import {Profile} from './Profile'
import {UserList} from './UserList'
import UseState from '../context/users/UseState'

export const Layout = () => {
  return (
    
      <>
        <UseState>
          <div className=" container p-2 text-bg-dark">
            <h1 className=" text-center">Select User for more Information</h1>
            <div className=" row text-bg-success p-3">
              <div className=" col-md-6">
                <UserList />
              </div>
              <div className=" col-md-6">
                <Profile />
              </div>
            </div>
          </div>
        </UseState>
      </>
    
  );
}
