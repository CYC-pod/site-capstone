import * as React from "react";
import { useEffect } from "react";
import apiClient from "../../../services/apiClient";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../AuthContext/auth";
import "./ComCard.css";

export default function ComCard({ comm }) {
  // const { comm, setComm } = useAuthContext();
  // const commId  = useAuthContext();
  // console.log(commId)

  useEffect(() => {
    console.log("hiiii");
    console.log("community image: ", comm.image_url);
  }, []);

  const { id, image_url, name, description } = comm; //containing them to contain these 3 keys

  return (
    <div className="CommCard">
      <Link to={"/commDescript/" + id} className="media">
        <img className="commImage" src={image_url}></img>
      </Link>
      <div className="commInfo">
        <h1 className="commName"> {name} </h1>
      </div>
      <div className="commDescription">
        {description ? (
          <p className="product-description">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
// src={comm ? comm.image : "undefined community image"}
