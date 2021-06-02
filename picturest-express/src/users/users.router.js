const { response, request } = require('express');
const express = require("express");
const { JsonWebTokenError } = require('jsonwebtoken');
const router = express.Router();
const jwt = require('jsonwebtoken');
const usersController = require("./users.controller");

const middleware = async (req, res, next) => {
  jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, function(err){
    if(err) {
      return res.status(401).json(err)
    }
    /* const decodedToken = jwt.decode(req.headers.authorization);
    console.log(decodedToken); */ // Así saaremos su token por consola

    return next();
  })
}

router.route("/").get(middleware, usersController.all).post(usersController.create);

router
  .route("/:id")
  .get(middleware, usersController.get)
  .delete(middleware, usersController.remove)
  .put(middleware, usersController.update);

module.exports = router;