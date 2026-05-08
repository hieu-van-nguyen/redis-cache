const express = require("express");
const redis = require("redis");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/repos/:username", getRepos);

async function getRepos(req, res, next) {
  try {
    const { username } = req.params;
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
const client = redis.createClient(6379);
