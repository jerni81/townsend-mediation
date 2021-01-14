import React from "react";
import { Link } from "react-router-dom";

function MiniContact() {
  return (
    <div className="MiniContact">
      <h3>Contact Us Today</h3>
      <hr />
      <div>
        <br />
        <p>
          <b>Local:</b> <a href="tel:8139147363">(813) 914-7363</a>
          <br />
          <b>Toll Free:</b>
          <a href="tel:8886967363">(888) 696-7363</a>
          <br />
          <b>Fax:</b> (813) 914-7367
          <br />
          <br />
        </p>

        <p>
          <b>Email:</b>{" "}
          <a href="mailto:info@townsendmediation.com">
            Info@TownsendMediation.com
          </a>
          <br />
          <br />
        </p>

        <p>
          <b>Address:</b> <br />
          6408 East Fowler Avenue
          <br />
          Tampa, FL 33617
        </p>

        <p>
          <Link to="Contact">Google Map</Link>
        </p>
      </div>
    </div>
  );
}

export default MiniContact;
