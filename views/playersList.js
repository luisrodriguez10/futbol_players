const playersList = (players) =>{
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
                <ul>
                    ${players.map(player => `
                            <li>
                                ${player.firstName} ${player.lastName} well known as ${player.nickName}. 
                                <small><a id='know-player' href='/players/${player.id}'>(Click here to know more.)</a></small>
                            </li>
                    `).join('')}
                </ul>
            </body>
        </html>
    `;
    return html
}

module.exports = playersList