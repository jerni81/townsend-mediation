import React from "react";
import JackHeadshot from "../main/images/jack-headshot.jpg";
import MiniContact from "./MiniContact";

function Team() {
  return (
    <div className="ServicesTeam Main">
      <div className="STBlock">
        <div className="ST1">
          <h3>Our Team</h3>
          <hr />
          <p>
            <img src={JackHeadshot} alt="Jack headshot" />
          </p>
          <h3> Jack L. Townsend, Sr.</h3>
          <p>
            Jack L. Townsend, Sr. has been providing outstanding services for
            mediations and arbitrations throughout Florida since 1996.
          </p>
          <p>
            While acting as a neutral mediator or consulting on effective{" "}
            <strong>A</strong>lternative <strong>D</strong>ispute{" "}
            <strong>R</strong>esolutions presentations, Jack has shown he has
            the ability to further the process and bridge the gap to resolving
            claims and disputes.
            <br />
            <br clear="left" />
          </p>
          <p></p>
          <h3>Background</h3>
          <p></p>
          <ul>
            <li>
              FLORIDA SUPREME COURT CERITIFIED MEDIATOR FOR DISPUTE RESOLUTION
              CENTER
            </li>
            <li>UNIVERSITY OF FLORIDA, BACHELOR OF SCIENCE, 1980</li>
            <li>STETSON LAW SCHOOL, JURIS DOCTORATE, 1983</li>
            <li>FLORIDA BAR MEMBER,1984</li>
            <li>U.S. DISTRICT COURT, MIDDLE DISTRICT OF FLORIDA, 1984</li>
            <li>BOARD CERTIFIED CIVIL TRIAL ATTORNEY, 1993</li>
            <li>HILLSBOROUGH COUNTY BAR MEMBER</li>
            <li>KANSAS CITY BARBEQUE SOCIETY MEMBER AND CERTIFIED JUDGE</li>
            <li>TEMPLE TERRACE POLICE PENSION BOARD MEMBER</li>
            <li>ALPHA GAMMA RHO EDUCATIONAL FOUNDATION MEMBER</li>
            <li>TEMPLE TERRACE SCHOOL IMPROVEMENT COMMITTEE MEMBER</li>
            <li>TEMPLE TERRACE YOUTH SPORTS ASSOCIATION—FOOTBALL COACH</li>
            <li>HILLSBOROUGH COUNTY SCHOOLS IMPROVEMENT TEAM MEMBER</li>
            <li>JESUIT HIGH SCHOOL SUPPORTER AND VOLUNTEER</li>
            <li>FIFTH GENERATION FLORIDIAN</li>
          </ul>
          <br clear="left" />
          <h3>Helen Townsend</h3>
          <p></p>
          <ul>
            <li>
              Joined the firm 1996, to manage office affairs, financial matters
              and mediation processing
            </li>
            <li>
              <strong>School volunteer</strong>: Jesuit Mothers Club, President;
              Young Middle Magnet School, PTA President; Temple Terrace
              Elementary, PTA President
            </li>
            <li>
              <strong>Community volunteer</strong>: Friends of Lifepath Hospice,
              Temple Terrace Arts Festival, Temple Terrace Junior Women’s Club,
              Temple Terrace Youth Sports Association, Temple Terrace Little
              League
            </li>
            <li>University of Florida, BS, Journalism </li>
          </ul>
          <br clear="left" />

          <h3>Julie Riggs</h3>
          <p></p>
          <ul>
            <li>Joined the firm in 1997 as Mr. Townsend legal assistant</li>
            <li>Mediation Coordinator, Paralegal and Notary Public</li>
            <li>
              <strong>Community volunteer</strong>: she volunteers her time to
              help feed the homeless at a local soup kitchen and at a local
              stable helping handicapped children ride horses
            </li>
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

export default Team;
