import * as React from "react";
import "./DetailedCom.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailedCom from "./DetailedCom";
// import { AuthContextProvider, useAuthContext } from "../AuthContext/auth";

export default function commDescript() {
  // const {community} = useAuthContext();
  const [comm, setComm] = useState([]);
  const { commId } = useParams();
  useEffect(() => {
    const fetchComm = async () => {
      const { data, error } = await apiClient.listCommbyId();
      if (data) setComm(data.community);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchComm();
    }
  }, []);
  useEffect(() =>{
    console.log(comm)
  }, [comm])
  return (
    <div className="Product Detail">
      {comm ? <DetailedCom comm={comm} commId={id} /> : null}
      
    </div>
  );
}
