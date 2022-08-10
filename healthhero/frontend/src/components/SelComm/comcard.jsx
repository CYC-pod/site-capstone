import * as React from "react";
import { useEffect } from "react";
import apiClient from "../../../services/apiClient";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../AuthContext/auth";
import "./ComCard.css";

export default function ComCard({ comm, showdescription }) {
  // const { comm, setComm } = useAuthContext();
  // const commId  = useAuthContext();
  // console.log(commId)

  useEffect(() => {
    console.log("hiiii");
    // console.log("community image: ", comm.image_url);
  }, []);

  useEffect(() => {
    console.log("description", description);
  });
  useEffect(() => {
    console.log("change in comm", comm);
  }, []);

  useEffect(() => {
    console.log("Comm id in comCard", comm.id);
  }, []);

  const { id, image_url, name, description } = comm; //containing them to contain these 3 keys

  return (
    <div className="CommCard">
      {/* <button onClick={handleOnClick}> */}
      <Link to={"/commDescript/" + id} className="media">
        <img className="commImage" src={image_url}></img>
      </Link>

      <div className="commInfo">
        <h1 className="commName"> {name} </h1>
        {/* <h1 className="commName"> {id} </h1> */}
      </div>
      <div className="commDescription">
        {/* {showdescription ? "with des" : "without descr"}n/*example */}
         {showdescription ? (
          <p className="product-description">{description}</p>
        ) : null} 
      </div>
    </div>
  );
}
// src={comm ? comm.image : "undefined community image"}
