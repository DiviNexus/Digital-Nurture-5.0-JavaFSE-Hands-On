import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Ticket Booking App</h1>

      {
        isLoggedIn ?

        <div>
          <h2>Welcome User</h2>

          <p>You can now book your tickets.</p>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Flight</th>
                <th>From</th>
                <th>To</th>
                <th>Fare</th>
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

          <br />

          <button>Book Ticket</button>

          <br /><br />

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

        :

        <div>

          <h2>Welcome Guest</h2>

          <p>You can browse the available flights.</p>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Flight</th>
                <th>From</th>
                <th>To</th>
                <th>Fare</th>
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

          <br />

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      }

    </div>
  );
}

export default App;