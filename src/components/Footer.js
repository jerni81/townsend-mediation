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
      <div id="footer1">
        <a
          href="http://jacktownsend.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF" }}
        >
          JackTownsend.com
        </a>

        <a
          href="https://www.nadn.org/jack-townsend"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF" }}
        >
          NADN.org/Jack-Townsend
        </a>
        <a
          href="https://www.floridabar.org/mybarprofile/398624"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF" }}
        >
          FloridaBar.org
        </a>
      </div>
      <div id="footer2">
        Site by:{" "}
        <a
          href="http://ajjernigan.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFF" }}
        >
          Jernigan Development
        </a>
      </div>
    </div>
  );
}

export default Footer;
