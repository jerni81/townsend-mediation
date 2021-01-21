import React from "react";
import MiniContact from "./MiniContact";

function Services({ hHeight }) {
  return (
    <div className="ServicesTeam Main" style={{ marginTop: hHeight }}>
      <div className="STBlock">
        <div className="ST1">
          <h3>Services</h3>
          <hr />

          <p>We are happy to provide the following services:</p>
          <ul>
            <li>Mediator</li>
            <li>Arbitrator – Sole or Panel</li>
            <li>Discovery Referee</li>
            <li>
              Mediation Consultation
              <ul>
                <li>Presentation Review</li>
                <li>Mock Mediation</li>
                <li>Mock Arbitration</li>
                <li>Strategy Review</li>
              </ul>
            </li>
            <li>Speakers Bureau</li>
            <li>Conference Seminar Training</li>
            <li>Mediation Conference Rooms</li>
            <li>ADR Program Training&nbsp;</li>
          </ul>
          <ul>
            <li>Seminar Presentations</li>
            <li>Power Point/Video Presentations</li>
            <li>Cybersettle consultations</li>
            <li>Receivership and Trustee Services</li>
          </ul>
        </div>
        <div className="ST2">
          <h3>Contact</h3>
          <hr />
          <MiniContact />
        </div>
      </div>
    </div>
  );
}

export default Services;
