const express = require("express");
const playersList = require("../views/playersList");
const playerDetails = require('../views/playerDetails')
const { client } = require("../db");

const app = express.Router()


app.get("/", async (req, res, next) => {
  try {
    const SQL = "SELECT * FROM players;";
    const response = await client.query(SQL);
    const players = response.rows;
    res.send(playersList(players));
  } catch (error) {
    next(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const SQL = "SELECT * FROM players WHERE id=$1;";
    const response = await client.query(SQL, [req.params.id]);
    const player = response.rows[0];
    res.send(playerDetails(player));
  } catch (error) {
    next(error);
  }
});

module.exports = app;
