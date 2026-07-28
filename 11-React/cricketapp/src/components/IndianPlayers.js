function IndianPlayers() {

    const TeamPlayers = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Hardik",
        "Pant"
    ];

    const oddPlayers = TeamPlayers.filter((player, index) => index % 2 === 0);
    const evenPlayers = TeamPlayers.filter((player, index) => index % 2 !== 0);

    const [odd1, odd2, odd3] = oddPlayers;
    const [even1, even2, even3] = evenPlayers;

    const T20Players = [
        "Virat",
        "Rohit",
        "Surya",
        "Hardik"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Iyer"
    ];

    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <ul>
                <li>{odd1}</li>
                <li>{odd2}</li>
                <li>{odd3}</li>
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                <li>{even1}</li>
                <li>{even2}</li>
                <li>{even3}</li>
            </ul>

            <hr />

            <h2>Merged Players</h2>

            <ul>

                {
                    mergedPlayers.map((player, index) => (

                        <li key={index}>{player}</li>

                    ))
                }

            </ul>

        </div>

    );

}

export default IndianPlayers;