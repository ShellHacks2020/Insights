const express = require("express");
const debug = require("debug");

const logger = debug("insights:twitter");
const { searchPopularTweets, getUsers } = require("../utils/twitter");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { statuses: tweets } = await searchPopularTweets(
      req.query.search || "dance"
    );
    logger(`Top tweets for #${req.query.search}: %o`, tweets);
    const userIdsQueryParam = tweets.map((tweet) => tweet.user.id).join(",");
    const users = await getUsers(userIdsQueryParam, "user_id");
    logger(`Users for top tweets: ${users}`);
    res.json(users);
  } catch (err) {
    debug("Error getting users: %o", err);
    next(err);
  }
});

module.exports = router;
