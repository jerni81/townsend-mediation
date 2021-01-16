import React from "react";
import { Link } from "react-router-dom";

function MiniContact() {
  return (
    <div className="MiniContact">
      <div>
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
          <a
            href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=6408+E+Fowler+Ave+Tampa,+Florida+33617&amp;sll=37.0625,-95.677068&amp;sspn=37.325633,50.625&amp;ie=UTF8&amp;ll=28.013498,-82.398834&amp;spn=0.151549,0.147629&amp;z=12"
            target="_blank"
          >
            6408 East Fowler Avenue
            <br />
            Tampa, FL 33617
          </a>
        </p>
      </div>
    </div>
  );
}

export default MiniContact;