const express = require("express");
const publicController = require("../controllers/publicController");

const router = express.Router();

// public Routes
router.route("/").get(publicController.getHome);
router
  .route("/about")
  .get(publicController.getAbout)
  .post(publicController.postAbout);
router
  .route("/portfolio")
  .get(publicController.getPortfolio)
  .post(publicController.postPortfolio);

module.exports = router;
