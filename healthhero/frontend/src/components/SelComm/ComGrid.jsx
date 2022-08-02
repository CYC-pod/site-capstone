import * as React from "react";
import { useEffect, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import ComCard from "./Comcard";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

export default function ComGrid() {
  const { comm, setComm } = useAuthContext();
  const { community, setCommunity } = useAuthContext();

  return (
    <div className="grid">
      <h1 className="header">Select A Community</h1>
      {community?.map((comm, index) => (
        <ComCard key={index} commId={comm.id} />
      ))}
    </div>
  );
}
