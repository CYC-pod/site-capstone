const express = require("express");
const Restaurant = require("../models/restaurant");
const Restriction = require("../models/restriction")
const { createUserJwt } = require("../utils/tokens");
const security = require("../middleware/security");
const router = express.Router();


router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;
    console.log("res locals: " , res.locals.user)
    const restaurant = await Restaurant.listRests(id);
    return res.status(201).json({ restaurants: restaurant });
  } catch (err) {
    next(err);
  }
});

router.get("/minrestriction", async (req, res, next) => { //change endpoint name later 
  try{
    const userRestrictions = await Restriction.listUserRestrictions(res?.locals?.user?.id) //array with user restriction names
    console.log("user Restrictions: ", userRestrictions) 
    const restaurants = await Restaurant.listRestsByRestriction(userRestrictions)
  return res.status(201).json({ restaurants: restaurants});
  } catch (err) {
  next(err);
}
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    let { id } = res.locals.user;
    console.log("id in restaurant route", id)
    const IncomingRestaurant = req.body;
    const OutgoingRestaurant = await Restaurant.PostRests(IncomingRestaurant, id);
    console.log("restaurant restrictions" , IncomingRestaurant.restrictions)
    console.log("restaurant id using restaurant.id: ", OutgoingRestaurant.id)
    const restrictions = await Restaurant.addAccommodation(OutgoingRestaurant, IncomingRestaurant.restrictions)
    return res.status(201).json({ restaurant: OutgoingRestaurant});
  } catch (err) {
    next(err);
  }
});

router.get("/allrestrictions", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    restaurantList = await Restaurant.restaurantByAllRestrictions(res?.locals?.user?.id)
    return res.status(201).json({restaurantList: restaurantList});
   }
   catch(err){
    next(err)
   }
  })


router.put(
  "/restaurant/:id",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      let { id } = res.locals.user;
      const restaurant = req.body;
      const restaurants = await Restaurant.PostRests(restaurant, id);
      return res.status(201).json({ restaurant: restaurants });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
