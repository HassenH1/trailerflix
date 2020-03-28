import React from 'react'

function Footer() {
  return (
    <div style={{
      color: "white",
      borderTop: "5px solid #4a4a4a",
      marginTop: "5rem",
      height: "8rem",
      display: "flex",
      justifyContent: "space-around",
      // background: "#4a4a4a"
      background: "black"
    }}>

      <div style={{ paddingTop: '1rem' }}>
        <h3 style={{ marginTop: "1rem", fontSize: "15px", textAlign: "center" }}>
          <i className="fas fa-database"></i> TMDB API</h3>
        <h4>(The Movie Database)</h4>
      </div>

      <div style={{ paddingTop: '1rem' }}>
        <h3 style={{ marginTop: "1rem", fontSize: "15px" }}><i className="fas fa-heart"></i> Made with Love.</h3>
      </div>

      <div style={{ paddingTop: '1rem' }}>

        <h3 style={{ marginTop: "1rem", fontSize: "15px" }}><i className="far fa-file-code" style={{ fontSize: "1.5rem" }}></i> By Hassen Hassen</h3>
      </div>

    </div>
  )
}

export default Footer