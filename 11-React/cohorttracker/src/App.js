import cohorts from "./data/cohorts";
import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          cohort={cohort}
        />
      ))}
    </div>
  );
}

export default App;