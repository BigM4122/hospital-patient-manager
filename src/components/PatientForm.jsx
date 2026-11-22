import { useState } from "react";
import "./css/PatientForm.css";

function PatientForm({ addPatient, patients, deletePatient }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const patient = {
      id: Date.now(),
      name: name,
      age: age,
      department: department,
    };
    console.log(patient);
    addPatient(patient);
    setName("");
    setAge("");
    setDepartment("");
  }

  return (
    <>
      <form className="patient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="patient name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">add patient</button>
      </form>

      <h2>patients</h2>

      {patients.length === 0 && <p>no patients yet.</p>}

      {patients.map((patient, index) => (
        <div className="patient-item" key={patient.id}>
          <strong>
            {index + 1}. {patient.name}
          </strong>
          <span> age: {patient.age} </span>
          <span> department: {patient.department} </span>
          <button onClick={() => deletePatient(patient.id)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default PatientForm;
