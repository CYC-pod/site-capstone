import * as React from "react";
import "./DetailedCom.css";
import { useParams } from "react-router-dom";

export default function commDescript() {
  const { commId } = useParams();

  return (
    <div className="Product Detail">
      <DetailedCom community={community} commId={commId} />
    </div>
  );
}
