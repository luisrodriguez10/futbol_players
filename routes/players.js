const express = require("express");
const playersList = require("../views/playersList");
const playerDetails = require("../views/playerDetails");
const { client } = require("../db");
const addPlayer = require("../views/addPlayer");

const app = express.Router();

app.post('/', async(req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const nickName = req.body.nickName;
        const dob = req.body.dob;
        const nationality = req.body.nationality;
        const currentTeam = `${req.body.currentTeam} - ${req.body.countryCurrentTeam}` ;
        const image = req.body.image;

        const SQL = 'INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
        const player = await client.query(SQL, [firstName, lastName, nickName, dob, nationality, currentTeam, image])
        res.redirect(`/players/${player.rows[0].id}`)
    } catch (error) {
        next(error)
    }
})

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

app.get("/add", (req, res, next) => {
  try {
    res.send(addPlayer());
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
