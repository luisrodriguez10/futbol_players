const addPlayer = () => {
    const html =   `
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
                <div id='add-player'>
                    <form method='POST' action='/players'>
                        <label for='firstName'>First Name</label>
                        <input type='text' name='firstName'/>
                        <label for='lastName'>Last Name</label>
                        <input type='text' name='lastName'/>
                        <label for='nickName'>Nick Name</label>
                        <input type='text' name='nickName'/>
                        <label for='dob'>Date of Birth</label>
                        <input type='date' name='dob'/>
                        <label for='nationality'>Nationality</label>
                        <input type='text' name='nationality'/>
                        <label for='currentTeam'>Current Team</label>
                        <input type='text' name='currentTeam'/>
                        <label for='countryCurrentTeam'>Country Current Team</label>
                        <input type='text' name='countryCurrentTeam'/>
                        <label for='image'>Select an image</label>
                        <input type='file' name='image'/>
                        <button>Add Player</button>
                    </form>
                </div>
            </body>
        </html>
    `;

    return html
}



module.exports = addPlayer