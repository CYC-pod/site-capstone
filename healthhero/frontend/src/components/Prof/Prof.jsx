import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import "../Prof/Prof.css";

export default function Prof() {
  const { user, setUser } = useAuthContext();
  var email;
  var username;
  React.useEffect(() => {
    console.log("user in prof :", user);
    // console.log("user email: ", user.email);
    email = user.email;
    username = user.username;
  }, [user]);
  // setUser(res.data.user);
  return (
    <div>
      <div className="backgroundP">
        <div id="profTitle">
          <p>Your Profile</p>
        </div>
        <div>
          <div id="round">
            Name: {username} School: Email: {email}
          </div>
          <div id="round"></div>
        </div>
      </div>
    </div>
  );
}
