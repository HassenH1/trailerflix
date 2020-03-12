import React from 'react'

export default function Form() {
  return (
    <form>
      <textarea id="subject" name="subject" placeholder="What do you think of this Movie.." style={{ height: "100px", width: "42.7rem" }}></textarea>
      <br />
      <input type="submit" value="Submit"></input>
    </form>
  )
}
