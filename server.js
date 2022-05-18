const express = require("express");
const morgan = require("morgan");
const { client, seeder } = require("./db");

const app = express();

app.use(morgan("dev"));
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    res.send(`
            <html>
                <head>
                    <title>Futbol Players</title>
                    <link rel='stylesheet' href='/styles.css' />
                </head>
                <body>
                    <nav id='nav-bar'>
                        <h1><a href='/'>Futbol Players</a></h1>
                        <div id='nav-items'>
                            <ul>
                                <li><a href='/players'>List Players</a></li>
                                <li><a href='/players/add'>Add Player</a></li>
                            </ul>
                        </div>
                    </nav>
                    <h1>Welcome to the Best Futbol Players</h1>
                </body>
            </html>
        `);
  } catch (error) {
    next(error);
  }
});

app.use("/players", require("./routes/players"));

const init = async () => {
  try {
    await client.connect();
    await seeder();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port  ${port}`));
  } catch (error) {
    console.log(error);
  }
};

init();
