const express = require("express");
const debug = require("debug");
const { getHashtag, getUserInfo } = require("../utils/tiktok");
const router = express.Router();
const logger = debug("insights:tiktok");

router.get("/", async (req, res, next) => {
  try {
    const hashtagPosts = await getHashtag(req.query.search || "dance");
    logger(`Received ${hashtagPosts.length} hashtag posts!`);
    const users = await Promise.all(
      hashtagPosts.map((post) => getUserInfo(post.authorMeta.name))
    );
    logger(users);
    res.json(users);
  } catch (error) {
    logger(error);
    next(error);
  }
});

module.exports = router;
