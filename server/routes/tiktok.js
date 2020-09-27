const express = require("express");
const debug = require("debug");
const { getHashtag, getUserInfo } = require("../utils/tiktok");
const router = express.Router();
const logger = debug("insights:tiktok");

router.get("/", async (req, res, next) => {
  try {
    const hashtagPosts = await getHashtag(req.query.search || "dance");
    logger(`Top ${hashtagPosts.length} TikToks for #${req.query.search}`);
    const users = await Promise.all(
      hashtagPosts.map((post) =>
        getUserInfo(post.authorMeta.name).catch((err) => err)
      )
    );
    logger(users);
    res.json(users);
  } catch (error) {
    logger(`Ran into error getting tiktok hashtags: %o`, error);
  }
});

module.exports = router;
