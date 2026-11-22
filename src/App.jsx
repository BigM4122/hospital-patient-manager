import { useState } from "react";
import PatientForm from "./components/PatientForm";

function App() {
  const [patients, setPatients] = useState([]);

  function addPatient(patient) {
    setPatients([...patients, patient]);
  }

  function deletePatient(id) {
    setPatients(patients.filter((patient) => patient.id !== id));
  }

  return (
    <div className="app">
      <h1>hospital patient manager</h1>
      <PatientForm
        addPatient={addPatient}
        patients={patients}
        deletePatient={deletePatient}
      />
    </div>
  );
}

export default App;
