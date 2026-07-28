function FlightDetails() {

    return (

        <div>

            <h2>Available Flights</h2>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>Flight</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Price</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>AI-202</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                        <td>₹4500</td>
                    </tr>

                    <tr>
                        <td>6E-345</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹5200</td>
                    </tr>

                    <tr>
                        <td>UK-678</td>
                        <td>Bangalore</td>
                        <td>Kolkata</td>
                        <td>₹6100</td>
                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default FlightDetails;