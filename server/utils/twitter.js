const Twitter = require("twitter");
const debug = require("debug");

const logger = debug("insights:utils:twitter");
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const searchUsers = async (searchTerm) => {
  const users = await client.get("users/search", {
    q: encodeURIComponent(searchTerm),
    result_filter: "user",
    count: 20,
  });
  return users;
};

const getUsers = async (searchTerm, key = "screen_name") => {
  logger(`Running getUsers with searchTerm ?${key}=${searchTerm}`);
  const users = await client.get("users/lookup", { [key]: searchTerm });
  return users;
};

const searchPopularTweets = async (searchTerms) => {
  const tweets = await client.get("search/tweets", {
    q: encodeURIComponent(searchTerms),
    count: 20,
    result_type: "popular",
  });
  return tweets;
};

module.exports = {
  getUsers,
  searchPopularTweets,
  searchUsers,
};
