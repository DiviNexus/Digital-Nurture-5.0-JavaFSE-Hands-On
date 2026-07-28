function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 92 },
        { name: "KL Rahul", score: 45 },
        { name: "Shubman Gill", score: 78 },
        { name: "Hardik Pandya", score: 66 },
        { name: "Ravindra Jadeja", score: 74 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Surya Kumar Yadav", score: 89 },
        { name: "Mohammed Shami", score: 61 },
        { name: "Jasprit Bumrah", score: 72 },
        { name: "Kuldeep Yadav", score: 81 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            {
                players.map((item, index) => (

                    <div key={index}>
                        <li>
                            Mr. {item.name}
                            <span> - {item.score}</span>
                        </li>
                    </div>

                ))
            }

            <hr />

            <h2>Players having score below 70</h2>

            {
                below70.map((item, index) => (

                    <div key={index}>
                        <li>
                            Mr. {item.name}
                            <span> - {item.score}</span>
                        </li>
                    </div>

                ))
            }

        </div>

    );

}

export default ListofPlayers;