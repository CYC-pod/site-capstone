import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import "./DetailedCom.css";

export default function DetailedComm() {
  // var comm = community[commid];
  return (
    <div className="productview">
      <h1 className="product-card">Product!{id}</h1>
      <ProductCard comm={comm} description={true} />
    </div>
  );
}
