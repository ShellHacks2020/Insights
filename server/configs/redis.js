const redis = require("async-redis");
const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});
module.exports = client;
