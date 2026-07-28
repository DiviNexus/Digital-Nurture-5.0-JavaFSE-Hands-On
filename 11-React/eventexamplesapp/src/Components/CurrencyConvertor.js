import { useState } from "react";

function CurrencyConvertor() {

  const [rupees, setRupees] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  function handleSubmit() {

    if (rupees === "") {
      alert("Please enter the amount in Rupees.");
      return;
    }

    let converted;

    switch (currency) {

      case "EUR":
        converted = (rupees / 90).toFixed(2);
        break;

      case "USD":
        converted = (rupees / 83).toFixed(2);
        break;

      case "GBP":
        converted = (rupees / 105).toFixed(2);
        break;

      default:
        converted = 0;
    }

    setResult(`${converted} ${currency}`);
  }

  return (

    <div>

      <h2>Currency Convertor</h2>

      <div style={{ marginBottom: "15px" }}>
        <label><b>Amount (INR): </b></label>

        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label><b>Currency: </b></label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="EUR">Euro (€)</option>
          <option value="USD">US Dollar ($)</option>
          <option value="GBP">British Pound (£)</option>
        </select>
      </div>

      <button onClick={handleSubmit}>
        Convert
      </button>

      <br /><br />

      {result && (
        <h3>
          Converted Amount: {result}
        </h3>
      )}

    </div>

  );

}

export default CurrencyConvertor;