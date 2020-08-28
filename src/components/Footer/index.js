import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div
      style={{
        color: "white",
        borderTop: "5px solid #4a4a4a",
        marginTop: "5rem",
        height: "8rem",
        display: "flex",
        justifyContent: "space-around",
        // background: "#4a4a4a"
        background: "black",
      }}
      className="footer-style"
    >
      <div style={{ paddingTop: "1rem" }}>
        <h3
          style={{ marginTop: "1rem", fontSize: "15px", textAlign: "center" }}
          className="footer-text"
        >
          <i className="fas fa-database"></i> TMDB API
        </h3>
        <h4>(The Movie Database)</h4>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <h3
          style={{ marginTop: "1rem", fontSize: "15px" }}
          className="footer-text"
        >
          <i className="fas fa-heart"></i> Made with Love.
        </h3>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <h3
          style={{ marginTop: "1rem", fontSize: "15px" }}
          className="footer-text"
        >
          <i className="far fa-file-code" style={{ fontSize: "1.5rem" }}></i> By
          Hassen Hassen
        </h3>
      </div>
    </div>
  );
}

export default Footer;
