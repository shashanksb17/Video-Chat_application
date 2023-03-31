const { createClient } = require("redis")
require("dotenv").config()
const client = createClient();
client.connect({
    url: process.env.redis_url
});

// module.exports = { client }