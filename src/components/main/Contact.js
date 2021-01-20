import React from "react";
import MiniContact from "./MiniContact";
import Office from "../main/images/JLT-offices.jpg";

function Contact() {
  return (
    <div className="Main ServicesTeam Contact">
      <h3>Contact</h3>
      <hr style={{ width: "100%" }} />
      <div className="ContactBlock">
        <div>
          <h3>The Offices of Jack L. Townsend, Sr.</h3>
          <MiniContact />
          <p></p>
          <img src={Office} alt="Our Offices" title="Our Offices" id="OfficeImg"/>
        </div>
      </div>
    </div>
  );
}

export default Contact;