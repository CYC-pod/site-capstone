import * as React from "react";

import "../Prof/Prof.css";

export default function Prof() {
  return (
    <div>
      <div className="backgroundP">
        <div id="profTitle">
          <p>Your Profile</p>
        </div>
        <div>
          <div id="round"> Name: School: Email: </div>
        </div>
      </div>
    </div>
  );
}
