import * as React from "react";
import apiClient from "../../../services/apiClient";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../AuthContext/auth";
import "../SelComm/comcard.css";

export default function ComCard({ comm }) {
  // const { comm, setComm } = useAuthContext();
  // const commId  = useAuthContext();
  // console.log(commId);
  const { id, image, name } = comm; //containing them to contain these 3 keys

  return (
    <div className="CommCard">
      <Link to={"/commDescript/" + id} className="media">
        <img className="commImage" src={image}></img>
      </Link>
      <div className="commInfo">
        <h1 className="commName"> {name} </h1>
      </div>
    </div>
  );
}
// src={comm ? comm.image : "undefined community image"}
