import React from "react";
import "./../index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>
        Developer :{" "}
        <a
          href="https://github.com/ansarali41"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ansar Ali
        </a>{" "}
        || {new Date().getFullYear()}
      </h2>
    </div>
  );
};

export default Footer;
