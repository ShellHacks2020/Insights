const express = require("express");
const debug = require("debug");
const logger = debug("insights:instagram");
const { getUser } = require("../utils/instagram");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { data } = await getUser();
    logger(`Got instagram response: ${data}`);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
