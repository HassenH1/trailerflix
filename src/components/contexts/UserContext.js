import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {
  //adding user to backend
  const addUser = async (userInput) => {

    try {
      const success = await fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <UserContext.Provider value={{ addUser }}>
      {props.children}
    </UserContext.Provider>
  )
}