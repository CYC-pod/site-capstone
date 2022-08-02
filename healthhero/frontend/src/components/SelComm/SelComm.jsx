import * as React from "react";
import { useEffect, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
import ComCard from "./Comcard";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

export default function SelComm() {
  const { comm, setComm } = useAuthContext();
  const { community, setCommunity } = useAuthContext();
  useEffect(() => {
    const fetchComm = async () => {
      const { data, error } = await apiClient.listcomm();
      if (data) setComm(data.community);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchComm();
    }
  }, []);
  return;
}
