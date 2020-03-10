import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {
  const [user, setUser] = useState("")
  const [wrongValidation, setWrongValidation] = useState("")

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

  const getUser = async (gettingUser) => {

    try {
      const i = await fetch("http://localhost:8000/signin", {
        method: "POST",
        body: JSON.stringify(gettingUser),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      const iJson = await i.json()
      console.log(iJson, "<--------------what i get back??")

      if (iJson.message === "This is an error!") {

        setWrongValidation("Email or Password doesn't match or exist")

        setTimeout(() => {
          setWrongValidation("")
        }, 5000)

      } else {
        
        setUser({ ...iJson })

      }

    } catch (err) {

      console.log(err)

    }
  }

  return (
    <UserContext.Provider value={{ addUser, getUser, user, wrongValidation }}>
      {props.children}
    </UserContext.Provider>
  )
}