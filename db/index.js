const {Client} = require('pg')

const client = new Client(process.env.DATABASE_URL || 'postgres://localhost/futbol_players_db');

const seeder = async() => {
    const SQL = `
        DROP TABLE IF EXISTS players;

        CREATE TABLE players(
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(50),
            "lastName" VARCHAR(50),
            "nickName" VARCHAR(50),
            dob DATE,
            nationality VARCHAR(50),
            "currentTeam" VARCHAR(50),
            image VARCHAR(50)
        );

        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Lionel', 'Messi', 'La Pulga', '06/24/1987', 'Argentina', 'Paris Saint German - France', 'messi.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Cristiano', 'Ronaldo', 'The GOAT', '02/05/1985', 'Portugal', 'Manchester United - England', 'cristiano.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Kylian', 'Mbappe', 'Donatello', '12/20/1998', 'France', 'Paris Saint German - France', 'mbappe.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Neymar', 'Junior', 'Joia', '02/05/1992', 'Brasil', 'Paris Saint German - France', 'neymar.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Karim', 'Benzema', 'The Cat', '12/19/1987', 'France', 'Real Madrid - Spain', 'benzema.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Kevin', 'De Bruyne', 'The Ginger Pele', '06/28/1991', 'Belgium', 'Manchester City - England', 'bruyne.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Mohamed', 'Salah', 'The Pharaoh', '06/15/1992', 'Egypt', 'Liverpool - England', 'salah.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Luka', 'Modric', 'Cruyff of the Balkan', '09/09/1985', 'Croatia', 'Real Madrid - Spain', 'modric.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Gabriel', 'Jesus', 'Fenomeno', '04/03/1997', 'Brazil', 'Manchester City - England', 'gabriel.png');
        INSERT INTO players("firstName", "lastName", "nickName", dob, nationality, "currentTeam", image) 
        VALUES('Robert', 'Lewandowski', 'The Body', '08/21/1988', 'Poland', 'Bayern Munich - Germany', 'lewandowsky.png');
    `;

    await client.query(SQL);
}

module.exports = {
    client, seeder
}