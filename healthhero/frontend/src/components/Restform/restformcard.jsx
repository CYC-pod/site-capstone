import "../ResResults/ResCard.css";
import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

export default function ResFormCard({ resId }) {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    async function getResId() {
      const res = await apiClient.listRestsbyId();
    //   console.log(res);
      console.log("restaurant list", res.data.restaurants)
      setRestaurant(res.data.restaurants[0]);
      ;
    }
    getResId();
  }, []);
//const { image_url, name, location, description, restrictions } = resId;

//   useEffect(() => {
//     console.log("communities by school:", communities);
//   }, [communities]);

  return (
    <div className="ResCard">
      {/* <Link to={"/resDescript/" + id} className="media"> */}
      <img className="resImage" src={restaurant.image}></img>
      {/* </Link> */}
      <div className="resinfo">
        <p className="resname">{restaurant.name}</p>
        <p className="location">{restaurant.location}</p>
        <p className="restrict">{restaurant.restrictions}</p>
        <p className="resdes">{restaurant.description}</p>
      </div>
    </div>
  );
}
