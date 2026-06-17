import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!stats) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>EventFlow AI Dashboard</h1>

      <h2>Total Events: {stats.total_events}</h2>

      <h2>Critical Events: {stats.critical_events}</h2>

      <h2>High Risk Events: {stats.high_events}</h2>

      <h2>Planned Events: {stats.planned_events}</h2>

      <h2>Unplanned Events: {stats.unplanned_events}</h2>
    </div>
  );
}

export default Dashboard;