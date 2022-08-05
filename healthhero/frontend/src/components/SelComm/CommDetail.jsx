import * as React from "react";
import "./DetailedCom.css";
import { useParams } from "react-router-dom";
import DetailedCom from "./DetailedCom";
// import { AuthContextProvider, useAuthContext } from "../AuthContext/auth";

export default function commDescript() {
  // const {community} = useAuthContext();
  const { commId } = useParams();

  return (
    <div className="Product Detail">
      <DetailedCom community={community} commId={commId} />
    </div>
  );
}
