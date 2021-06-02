const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const pinsController = require("./pins.controller.js");

router.get("/", pinsController.all);
router.post("/", pinsController.create);

router.get("/:id", pinsController.get);
router.delete("/:id", pinsController.remove);
router.put("/:id", pinsController.update);

module.exports = router;