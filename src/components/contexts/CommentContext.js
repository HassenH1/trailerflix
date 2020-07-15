import React, { createContext, useState } from "react";

export const CommentContext = createContext();

export default function CommentContextProvider(props) {
  const [mID, setMID] = useState("");

  const postingComment = async (a) => {
    try {
      const c = await fetch("/review/post", {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await c.json();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchingComment = async (movieID, userID) => {
    const l = await fetch("/review/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const lJson = await l.json();
    setMID(lJson);
  };

  const removeComment = (cID) => {
    //having stupid problems here */////////////////////////////////////////////////////////////////////
    mID.filter((elem) => {
      return elem._id !== cID;
    });
  };

  return (
    <CommentContext.Provider
      value={{ postingComment, fetchingComment, removeComment, mID }}
    >
      {props.children}
    </CommentContext.Provider>
  );
}
