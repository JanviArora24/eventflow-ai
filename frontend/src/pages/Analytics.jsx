import { useEffect, useState } from "react";
import API from "../services/api";

function Analytics() {
  const [typeData, setTypeData] = useState({});
  const [zoneData, setZoneData] = useState({});
  const [priorityData, setPriorityData] = useState({});

  useEffect(() => {
    API.get("/events-by-type")
      .then((res) => setTypeData(res.data))
      .catch((err) => console.log(err));

    API.get("/events-by-zone")
      .then((res) => setZoneData(res.data))
      .catch((err) => console.log(err));

    API.get("/events-by-priority")
      .then((res) => setPriorityData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <h2>Events By Type</h2>
      <pre>{JSON.stringify(typeData, null, 2)}</pre>

      <h2>Events By Zone</h2>
      <pre>{JSON.stringify(zoneData, null, 2)}</pre>

      <h2>Events By Priority</h2>
      <pre>{JSON.stringify(priorityData, null, 2)}</pre>
    </div>
  );
}

export default Analytics;