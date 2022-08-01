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
import Diet from "./components/Diet/Diet";
import Prof from "./components/Prof/Prof";
import SelComm from "./components/SelComm/SelComm";
import MyComm from "./components/MyComm/MyComm";
import YourRes from "./components/YourRes/YourRes";
import ResResults from "./components/ResResults/ResResults";
import InResults from "./components/ResResults/InResults";

function App() {
  const { user, setUser } = useAuthContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    console.log("app is rendering");
    const fetchAuthUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
    };

    const token = localStorage.getItem("token");
    if (token) {
      console.log("token: ", token);
      apiClient.setToken(token);
      fetchAuthUser();
    }
  }, []);
  const logoutuser = async () => {
    await apiClient.logoutUser();
    setUser(NULL);
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
          path="/diet"
          element={
            <>
              <Diet />
            </>
          }
        />
        <Route
          path="/prof"
          element={
            <>
              <Prof />
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
          path="/communities"
          element={
            <>
              <SelComm />
            </>
          }
        />
        <Route
          path="/myCommunities"
          element={
            <>
              <MyComm />
            </>
          }
        />
        <Route path="/commForm" element={<CommForm />} />
        <Route
          path="/myRes"
          element={
            <>
              <YourRes />
            </>
          }
        />
        <Route
          path="/resResults"
          element={
            <>
              <ResResults />
            </>
          }
        />
        <Route
          path="/resResults/specific"
          // would matter on id / which restaurant
          element={
            <>
              <InResults />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
