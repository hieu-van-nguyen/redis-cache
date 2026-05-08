const express = require("express");
const redis = require("redis");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const client = redis.createClient(6379);
