import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [user, setUser] = useState("");

  const [wrongValidation, setWrongValidation] = useState("");

  //adding user to backend
  const addUser = async (userInput) => {
    try {
      const success = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const successJson = await success.json();

      localStorage.setItem("user", JSON.stringify(successJson));

      getUser(successJson);
    } catch (err) {
      console.log(err);
    }
  };

  //login user
  const getUser = async (gettingUser) => {
    try {
      const i = await fetch("/signin", {
        method: "POST",
        body: JSON.stringify(gettingUser),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const iJson = await i.json();

      if (iJson.message === "This is an error!") {
        setWrongValidation("Email or Password doesn't match or exist");

        setTimeout(() => {
          setWrongValidation("");
        }, 5000);
      } else {
        setUser({ ...iJson });
        localStorage.setItem("user", JSON.stringify(iJson));
      }
    } catch (err) {
      console.log(err);
    }
  };

  //signing out
  const signOutUser = () => {
    setUser("");
    localStorage.removeItem("user");
  };

  return (
    //passing values down as "props"
    <UserContext.Provider
      value={{ addUser, getUser, signOutUser, user, wrongValidation }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
