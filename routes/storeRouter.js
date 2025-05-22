//External router
const express = require("express");
const storeRouter = express.Router();
//express will make a router for us so that we can use this user router in the app.js

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.post("/favourites", storeController.postAddToFavourite);

storeRouter.get("/homes/:homeId",storeController.getHomeDetails)


storeRouter.post("/favourites/delete/:homeId",storeController.postRemoveFromFavourite)
module.exports = storeRouter;
