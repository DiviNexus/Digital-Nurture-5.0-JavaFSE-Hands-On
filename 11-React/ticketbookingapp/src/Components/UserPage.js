import FlightDetails from "./FlightDetails";

function UserPage({ logout }) {

    return (

        <div>

            <h1>Welcome User</h1>

            <p>You can now book your tickets.</p>

            <FlightDetails />

            <br />

            <button>
                Book Ticket
            </button>

            &nbsp;

            <button onClick={logout}>
                Logout
            </button>

        </div>

    );

}

export default UserPage;