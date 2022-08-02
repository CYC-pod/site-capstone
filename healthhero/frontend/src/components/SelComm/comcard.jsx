import * as React from "react";
import apiClient from "../../../services/apiClient";
import { useEffect } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import "./comcard.css";

export default function ComCard() {
  const { comm, setComm } = useAuthContext();

  return (
    <div className="CommCard">
      <Link to={`/commDescript/${commID}`} className="media">
        <img
          className="commImage"
          src={comm ? comm.image : "undefined community image"}
        ></img>
      </Link>
      <div className="commInfo">
        <h1 className="commName">
          {" "}
          {comm ? comm.name : "undefined community name"}{" "}
        </h1>
      </div>
    </div>
  );
}
