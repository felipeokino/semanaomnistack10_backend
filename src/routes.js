const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");
const routes = Router();
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
// INSERT USERS
routes.post("/insert/devs", DevController.store);

// GET USERS
routes.get("/get/devs", DevController.index);

// DELETE USERS
routes.delete("/delete/devs", DevController.destroy);

routes.post("/update/devs", DevController.update);
routes.get('/search', SearchController.index)
module.exports = routes;
// index, show, store, update, destroy