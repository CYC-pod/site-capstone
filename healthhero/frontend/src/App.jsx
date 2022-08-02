import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { AuthContextProvider, useAuthContext } from "../AuthContext/auth";
import Register from "./components/Register/Register";
import Restform from "./components/Restform/Restform";
import Landing from "./components/Landing/Landing";
import apiClient from "../services/apiClient";
import Slick from "./components/Slick/Slick";
import SchoolsView from "./components/SchoolsView/SchoolsView";
import CommForm from "./components/CommForm/Commform";

function App() {
  const { user, setUser } = useAuthContext();
  const navigateTo = useNavigate();
  
  // useEffect(() => {
  //   console.log("app is rendering")
  //   const fetchAuthUser = async () => {
  //     const { data, error } = await apiClient.fetchUserFromToken();
  //     if (data) setUser(data.user);
  //   };

  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     console.log("token: ", token);
  //     apiClient.setToken(token);
  //     fetchAuthUser();
  //   }
  // }, []);

  const autoLoggIn = async () => {
      if(!user)
      {
        const authMeData = await apiClient.fetchUserFromToken()
        const fetchedUser = authMeData.data?.user
        console.log("fetched user: ", fetchedUser);
        if(fetchedUser)
        {
          setUser(fetchedUser)
        }
        else
        {
          console.log("auth me error: " , authMeData.error)
        }
        console.log("User in app: ", user);
      }  
  }

  React.useEffect(() => {
    autoLoggIn()
  }, [])

  
  const logoutuser = async () => {
    await apiClient.logoutUser();
    console.log("LOGOUT PRESSED")
    setUser(null);
  };

  return (
    <>
      {/* {console.log("value of loggedIn in app jsx" , loggedIn)} */}
      <Navbar logoutuser={logoutuser} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route
          path="/schools"
          element={
            <>
              <SchoolsView />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/restForm"
          element={
            <>
              <Restform />
            </>
          }
        />
        <Route
          path="/commForm"
          element={<CommForm />}
        />
      </Routes>
    </>
  );
}

export default App;
