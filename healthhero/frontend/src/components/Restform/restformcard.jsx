import "../ResResults/ResCard.css";
import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";
export default function ResFormCard({ resId }) {
  const [restaurant, setRestaurant] = useState([]);
  const [ restrictions, setRestrictions] = useState([])
  useEffect(() => {
    async function getResId() {
      const res = await apiClient.listRestsbyId();
      //   console.log(res);
      console.log("restaurant list", res.data.restaurants);
      setRestaurant(res.data.restaurants[0]);
    }
    getResId();
  }, []);
  useEffect(() => {
    console.log("restaurant in restFormCard", restaurant);
  }, [restaurant]);
  //const { image_url, name, location, description, restrictions } = resId;
    useEffect(() => {
    async function getRestrictions() {
      console.log("restaurant id in getRest", restaurant.id);
      const res = await apiClient.listRestaurantRestrictions(restaurant.id);
      setRestrictions(res.data.restrictions);
      console.log("Restaurant restriction list", res.data.restrictions);
    }
    getRestrictions();
  }, [restaurant]);
  useEffect(() => {
    console.log("restaurant's restrictions:", restrictions);
  }, [restrictions]);
  
  return (
    <div className="ResCard">
      {/* <Link to={"/resDescript/" + id} className="media"> */}
      <img className="resImage" src={restaurant.image_url}></img>
      {/* </Link> */}
      <div className="resinfo">
        <p className="resname">{restaurant.name}</p>
        <p className="location">{restaurant.location}</p>
        {restrictions.map((restriction) => {
        return (
          <div> {restriction} </div>
        );
      })}
        <p className="restrict">{restaurant.restrictions} </p>
        <p className="resdes">{restaurant.description}</p>
      </div>
    </div>
  );
}
