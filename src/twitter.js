var Twitter = require('twitter');
require('dotenv').config()

var client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
});

var params = { screen_name: 'nodejs' };

export function getSomething() {
    console.log('it rans')
    console.log(process.env.TWITTER_API_KEY)
    console.log(process.env.MONGODB_URI)
    client.get('favorites/list', function (error, tweets, response) {
        if (error) throw error;
        console.log(tweets);  // The favorites.
        console.log(response);  // Raw response object.
    });
}

