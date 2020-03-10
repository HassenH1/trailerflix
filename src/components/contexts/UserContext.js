import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {
  const [user, setUser] = useState("")
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

  const getUser = async () => {
    try {
      const i = await fetch("http://localhost:8000/signin", {
        method: "GET",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const iJson = await i.json()
      setUser({ ...iJson })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <UserContext.Provider value={{ addUser, user }}>
      {props.children}
    </UserContext.Provider>
  )
}