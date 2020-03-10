import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {
  //adding user to backend
  const addUser = (userInput) => {
    console.log(userInput, "<---------------user input from context side")
  }

  return (
    <UserContext.Provider value={{ addUser }}>
      {props.children}
    </UserContext.Provider>
  )
}