import React, { useEffect } from "react";
import "../App.css";

function Footer({ setFHeight }) {
  useEffect(() => {
    const height = document.getElementById("footer").clientHeight;
    // const hHeight = document.getElementById("Header").offsetHeight;
    // let offset = bHeight - hHeight;
    setFHeight(height);
  }, []);
  return (
    <div className="Footer" id="footer">
      <div>
        <a
          href="http://jacktownsend.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF", textDecoration: "none" }}
        >
          JackTownsend.com
        </a>
        <br />
        <a
          href="https://www.nadn.org/jack-townsend"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF", textDecoration: "none" }}
        >
          NADN.org/Jack-Townsend
        </a>
      </div>
      <div>
        <a
          href="https://www.floridabar.org/about/section/profile/?num=398624"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF", textDecoration: "none" }}
        >
          FloridaBar.org
        </a>
        <br />
        <a
          href="http://ajjernigan.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF", textDecoration: "none" }}
        >
          Jernigan Development
        </a>
      </div>
    </div>
  );
}

export default Footer;
