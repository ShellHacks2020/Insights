const axios = require("axios");

const getUser = async () => {
  // TODO: This does not work, possibly never will due to instagram's Cambridge Analytica Scandal
  return await axios.get(
    `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_TOKEN}`
  );
};

module.exports = { getUser };
