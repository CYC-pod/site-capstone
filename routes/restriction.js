const express = require("express");
const Restriction = require("../models/restriction")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
    const restrictions = await Restriction.listRestrictions()
    return res.status(201).json({ restrictions: restrictions});
    } catch (err) {
    next(err);
  }
})

router.post("/", async (req, res, next) => {
    try{
        const restriction = req.body 
        const restrictions = await Restriction.postRestrictions(restriction)
        return res.status(201).json({ restrictions: restrictions });
    } catch (err){
        next(err);
    }
})

module.exports = router