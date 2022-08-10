import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import ComCard from "./ComCard";
import "./DetailedCom.css";

export default function DetailedComm({ comm, id }) {
  // var comm = community[commid];

  return (
    <div className="productview">
      <h1 className="product-card">Community !{id}</h1>
      <ComCard comm={comm} description={true}  />
    </div>
  );
}
