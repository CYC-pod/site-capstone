import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import "./DetailedCom.css";


export default function DetailedComm() {
  var comm = community[commid];
  return (
    <div className="detailedCard">
      <img className="commImage" src={comm.image_url}></img>
      <div className="commInfo">
        <h1 className="commName"> {comm.name} </h1>
        <br />
        <div className="commDescription"> {comm.description} </div>
      </div>
    </div>
  );
}
