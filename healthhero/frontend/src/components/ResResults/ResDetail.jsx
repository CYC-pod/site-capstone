import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../services/apiClient";
import ResCard from "./ResCard";
import "./ResDetail.css";

export default function ResDetail() {
  // var comm = community[commid];
  // const { comm, setComm } = useAuthContext();
  // const {id } = useAuthContext();
  // const [comm, setcomm] = useState(null);
  const [restaruant, setRestaurant] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log("id working", id);
  }, [id]);

  useEffect(() => {
    console.log("restaurant: ", restaruant);
  }, [restaruant]);

  useEffect(() => {
    async function getRestid() {
      const res = await apiClient.listRestbyId(id);
      console.log("response", res);
      setRestaurant(res.data.restaruant);
      console.log("restaurant id", res.data.restaruant);
    }
    getRestid();
  }, []);

  useEffect(() => {
    console.log("restaurant by id:", restaruant);
  }, [restaruant]);

  return (
    <div className="Restview">
      <h1 className="rest-card">Restaurant {restaruant?.name} !</h1>
      {/*// if not null try to get property if null= undefined */}
      {restaruant ? (
        <ResCard rest={restaruant} showdescription={true} id={id} />
      ) : null}
    </div>
  );
}
