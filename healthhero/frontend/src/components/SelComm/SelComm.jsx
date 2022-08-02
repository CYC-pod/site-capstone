import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react";
import { useAuthContext } from "../../../AuthContext/auth";
// import { CommForm } from "../CommForm/Commform";
import "./SelComm.css";

export default function SelComm() {
  const { comm, setComm } = useAuthContext();
  useEffect(() => {
    const fetchComm = async () => {
      const { data, error } = await apiClient.listcomm();
      if (data) setComm(data.user);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchComm();
    }
  }, []);
  return <div></div>;
}
