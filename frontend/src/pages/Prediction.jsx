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
    <div
      className="page-container"
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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

          <option value="accident">accident</option>
          <option value="construction">construction</option>
          <option value="congestion">congestion</option>
          <option value="vehicle_breakdown">vehicle_breakdown</option>
          <option value="public_event">public_event</option>
          <option value="vip_movement">vip_movement</option>
          <option value="procession">procession</option>
          <option value="protest">protest</option>
          <option value="water_logging">water_logging</option>
          <option value="tree_fall">tree_fall</option>
          <option value="pot_holes">pot_holes</option>
          <option value="road_conditions">road_conditions</option>
          <option value="others">others</option>
        </select>

        <br />
        <br />

        <select name="requires_road_closure" onChange={handleChange}>
          <option value="">Road Closure?</option>
          <option value="True">Yes</option>
          <option value="False">No</option>
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
        <div
          style={{
            marginTop: "30px",
            background: "#111827",
            padding: "24px",
            borderRadius: "16px",
            width: "320px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h2>Prediction Result</h2>

          <h3
            style={{
              color:
                result.predicted_risk === "Critical"
                  ? "#ef4444"
                  : result.predicted_risk === "High"
                    ? "#f97316"
                    : result.predicted_risk === "Medium"
                      ? "#eab308"
                      : "#22c55e",
              marginTop: "16px",
            }}
          >
            Risk Level: {result.predicted_risk}
          </h3>

          <p style={{ marginTop: "16px", fontSize: "18px" }}>
            Officers Required: {result.officers}
          </p>

          <p style={{ marginTop: "8px", fontSize: "18px" }}>
            Barricades Required: {result.barricades}
          </p>
          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "#94a3b8",
            }}
          >
            Prediction generated using historical Bengaluru traffic event data.
          </p>
        </div>
      )}
    </div>
  );
}

export default Prediction;
