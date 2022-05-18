const playerDetails = (player) => {
    const html = `
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
                <div id='player-info'>
                    <img id='player-img' src='/images/${player.image ? player.image : 'no-found.png'}  ' alt='${player.firstName} ${player.lastName}'/>
                    <p>Full Name: ${player.firstName} ${player.lastName}</p>
                    <p>Nickname: ${player.nickName}</p>
                    <p>Date of Birth: ${player.dob}</p>
                    <p>Nationality: ${player.nationality}</p>
                    <p>Current Team: ${player.currentTeam}</p>
                    <p><a href='/players'>Return to Players List</a></p>
                </div>
            </body>
        </html>
    `;

    return html
}

module.exports = playerDetails