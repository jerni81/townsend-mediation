import React from "react";

function Calender() {
  return (
    <div className="Calendar Main">
      <div id="calendarTop">
        <b>
          To reserve an appointment online, please click your preferred
          available date.
        </b>
        <br />
        Our staff will contact you on receipt of your Appointment Request form.
      </div>
      <br />
      <div>
        <iframe
          allowtransparency="true"
          src="https://www.nadn.org/smallcalendar/171843674"
          frameborder="0"
          width="310"
          scrolling="no"
          height="440"
          alt="Attorney Calendar"
        >
          Your Browser Require FRAMES, Click Link Below
        </iframe>
      </div>
    </div>
  );
}

export default Calender;
