import * as React from "react";
import { AuthContextProvider, useAuthContext } from "../../../AuthContext/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../services/apiClient";
import ComCard from "./ComCard";
import "./DetailedCom.css";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function DetailedComm() {
  // var comm = community[commid];
  // const { comm, setComm } = useAuthContext();
  // const {id } = useAuthContext();
  // const [comm, setcomm] = useState(null);
  const [community, setCommunity] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [usersInCom, setUsersInComm] = useState([]);

  useEffect(() => {
    console.log("id working", id);
  }, [id]);

  // useEffect(() => {
  //   console.log("community: ", community);
  // }, [community]);

  useEffect(() => {
    async function getCommid() {
      const res = await apiClient.listCommbyId(id);
      console.log("response", res);
      setCommunity(res.data.community);
      // console.log("community id", res.data.community);
    }
    getCommid();
  }, []);

  useEffect(() => {
    async function listUsersInComm(){
      const res = await apiClient.listUsersInComm(id)
      console.log("users in the community: " , res?.data?.usersInComm)
      setUsersInComm(res?.data?.usersInComm)
    }
    listUsersInComm();
  }, [community])

  useEffect(() => {
    console.log("users in community yay: ", usersInCom)
  }, [community])

  // useEffect(() => {
  //   async function addcomm() {
  //     const res = await apiClient.addUserToComm(id);
  //     console.log("response", res);
  //     setCommunity(res.data.community);
  //     console.log("adding community", res.data.community);
  //   }
  //   addcomm();
  // }, []);

  // useEffect(() => {
  //   console.log("communities by school:", community);
  // }, [community]);

  const handleOnSubmit = async () => {
    setIsLoading(true);
    // setErrors((e) => ({ ...e, form: null }));
    console.log("id in the detailed comm file: ", id)
    try {
     
      const res = await apiClient.addUserToComm(id);
      
      console.log(res);
      if (res?.data?.community) {
        // const { comm, setComm } = useAuthContext();
        //To do save community data somewhere
        // apiClient.setToken(res.data.token);
        setIsLoading(false);
        navigate("/prof"); }
      // } else {
      //   setErrors((e) => ({
      //     ...e,
      //     form: "Something went wrong with adding your community",
      //   }));
      //   setIsLoading(false);
      }
    catch (err) {
      console.log(err);
      // const message = err?.response?.data?.error?.message;
      // setErrors((e) => ({
      //   ...e,
      //   form: message ? String(message) : String(err),
      };
      setIsLoading(false);
    };

  return (
    <div className="productview">
      <h1 className="product-card"> {community.name} !</h1>

      {community ? (
        <div className="plc">
          <ComCard comm={community} showdescription={true} id={id} />
        </div>
      ) : null}

       <AvatarGroup max={1}>
        {usersInCom?.map((user, idx) => (<Avatar sx={{ bgcolor: '' }}>{user.username[0]}</Avatar>))}
      </AvatarGroup>
      <div>
        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Add Community To Profile"}
        </button>
      </div>
    </div>
  );
}
