const TikTokScraper = require("tiktok-scraper");

const getHashtag = async (hashtag) => {
  const { collector } = await TikTokScraper.hashtag(hashtag, { number: 100 });
  return collector;
};

const getUserInfo = async (username) => {
  return await TikTokScraper.getUserProfileInfo(username);
};

module.exports = { getHashtag, getUserInfo };
