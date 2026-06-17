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
      const response = await API.post(
        "/predict",
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Congestion Prediction</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="event_type"
          placeholder="planned / unplanned"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="priority"
          placeholder="High / Low"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="event_cause"
          placeholder="Accident / Rally"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="requires_road_closure"
          placeholder="TRUE / FALSE"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="zone"
          placeholder="Zone"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Predict
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Prediction Result</h2>

          <p>
            Risk: {result.predicted_risk}
          </p>

          <p>
            Officers: {result.officers}
          </p>

          <p>
            Barricades: {result.barricades}
          </p>
        </div>
      )}
    </div>
  );
}

export default Prediction;