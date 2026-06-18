import { useState } from "react";
import API from "../services/api";

function Prediction() {
  const [formData, setFormData] = useState({
    event_type: "",
    priority: "",
    event_cause: "",
    requires_road_closure: "",
    zone: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/predict", formData);

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Congestion Prediction</h1>

      <form onSubmit={handleSubmit}>
        <select name="event_type" onChange={handleChange}>
          <option value="">Select Event Type</option>
          <option value="planned">planned</option>
          <option value="unplanned">unplanned</option>
        </select>

        <br />
        <br />

        <select name="priority" onChange={handleChange}>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>

        <br />
        <br />

        <select name="event_cause" onChange={handleChange}>
          <option value="">Select Cause</option>
          <option value="Accident">Accident</option>
          <option value="Construction">Construction</option>
          <option value="Festival">Festival</option>
          <option value="Political Rally">Political Rally</option>
          <option value="Sports Event">Sports Event</option>
        </select>

        <br />
        <br />

        <select name="requires_road_closure" onChange={handleChange}>
          <option value="">Road Closure?</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
        </select>

        <br />
        <br />

        <select name="zone" onChange={handleChange}>
          <option value="">Select Zone</option>
          <option value="Central Zone 2">Central Zone 2</option>
          <option value="West Zone 1">West Zone 1</option>
          <option value="North Zone 2">North Zone 2</option>
          <option value="South Zone 2">South Zone 2</option>
        </select>
        <br />
        <br />

        <button type="submit">Predict</button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Prediction Result</h2>

          <p>Risk: {result.predicted_risk}</p>

          <p>Officers: {result.officers}</p>

          <p>Barricades: {result.barricades}</p>
        </div>
      )}
    </div>
  );
}

export default Prediction;
