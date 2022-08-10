import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../services/apiClient";
import ComCard from "./ComCard";
import "./DetailedCom.css";

export default function DetailedComm() {
  // var comm = community[commid];
  // const { comm, setComm } = useAuthContext();
  // const {id } = useAuthContext();
  // const [comm, setcomm] = useState(null);
  const [community, setCommunity] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("id working", id);
  }, [id]);

  useEffect(() => {
    console.log("community: ", community);
  }, [community]);

  useEffect(() => {
    async function getCommid() {
      const res = await apiClient.listCommbyId(id);
      console.log("response", res);
      setCommunity(res.data.community);
      console.log("community id", res.data.community);
    }
    getCommid();
  }, []);

  useEffect(() => {
    console.log("communities by school:", community);
  }, [community]);

  return (
    <div className="productview">
      <h1 className="product-card">Community {community.name} !</h1>
      {community ? (
        <ComCard comm={community} showdescription={true} id={id} />
      ) : null}
    </div>
  );
}
