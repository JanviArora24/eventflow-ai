import { useEffect, useState } from "react";
import API from "../services/api";
import StatCard from "../components/StatCard";

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
    <div className="page-container" style={{ padding: "30px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        EventFlow AI Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <StatCard
          title="Total Events"
          value={stats.total_events}
          color="#2563eb"
        />

        <StatCard
          title="Critical Events"
          value={stats.critical_events}
          color="#dc2626"
        />

        <StatCard
          title="High Risk Events"
          value={stats.high_events}
          color="#ea580c"
        />

        <StatCard
          title="Planned Events"
          value={stats.planned_events}
          color="#16a34a"
        />

        <StatCard
          title="Unplanned Events"
          value={stats.unplanned_events}
          color="#7c3aed"
        />
      </div>
    </div>
  );
}

export default Dashboard;
