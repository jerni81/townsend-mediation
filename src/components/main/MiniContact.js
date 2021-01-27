import React from "react";
import Video from "../main/images/video_conf.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MiniContact() {
  const matches = useMediaQuery("(min-width: 850px)");

  return (
    <div className="MiniContact">
      <div>
        <p>
          {matches ? (
            <>
              <b>Office:</b> (813) 914-7363
              <br />
            </>
          ) : (
            <>
              <b>Office:</b> <a href="tel:8139147363">(813) 914-7363</a>
              <br />
            </>
          )}
          <b>Fax:</b> (813) 914-7367
          <br />
        </p>

        <p>
          <b>Email:</b>{" "}
          <a href="mailto:info@townsendmediation.com">
            Info@TownsendMediation.com
          </a>
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
        <br />
        <div id="vid-conf">
          <img src={Video} />
          <br />
          Video Conferencing Available
        </div>
      </div>
    </div>
  );
}

export default MiniContact;
