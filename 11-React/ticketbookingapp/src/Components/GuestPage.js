import FlightDetails from "./FlightDetails";

function GuestPage({ login }) {

    return (

        <div>

            <h1>Welcome Guest</h1>

            <p>You can browse the available flights.</p>

            <FlightDetails />

            <br />

            <button onClick={login}>
                Login
            </button>

        </div>

    );

}

export default GuestPage;