import React from "react";
import JackHeadshot from "../main/images/jack-headshot.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Bio">
        <h3>
          Jack L. Townsend, Sr. has been providing outstanding services for
          mediations and arbitrations throughout Florida since 1996.
        </h3>
        <div className="Bio2">
          <img src={JackHeadshot} alt="Jack headshot" />
          <span>
            While acting as a neutral mediator or consulting on effective
            Alternative Dispute Resolutions presentations, Jack has shown he has
            the ability to further the process and bridge the gap to resolving
            claims and disputes.
            <br />
            <br />
            <b style={{ color: "red" }}>Explore</b>
            <br />
            <br />
            <Link to="/Services">Our Services</Link>
            <br />
            How can we help you?
            <br />
            <br />
            <Link to="/Calender">See Online Mediation Calendar</Link>
            <br />
            Find available dates online
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
