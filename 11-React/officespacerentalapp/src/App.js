import officeImage from "./Images/office.webp";

function App() {

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeSpaces = [

    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },

    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad"
    },

    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Bangalore"
    },

    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Pune"
    }

  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space, at Affordable Range!</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeSpaces.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid gray",
              marginBottom: "15px",
              padding: "10px"
            }}
          >

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> ₹{item.Rent}
            </p>

            <p>
              <b>Address:</b> {item.Address}
            </p>

          </div>

        ))
      }

    </div>

  );

}

export default App;