import * as React from "react";
import apiClient from "../../../services/apiClient";
import { Link } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import "./comcard.css";

export default function ComCard() {
  const { comm, setComm } = useAuthContext();
  const { commId } = useAuthContext();
  return (
    <div className="CommCard">
      <Link to={"/commDescript/" + commId} className="media">
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
