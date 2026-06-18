import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

function Analytics() {
  const [typeData, setTypeData] = useState({});
  const [zoneData, setZoneData] = useState({});
  const [priorityData, setPriorityData] = useState({});

  useEffect(() => {
    API.get("/events-by-type")
      .then((res) => setTypeData(res.data))
      .catch(console.error);

    API.get("/events-by-zone")
      .then((res) => setZoneData(res.data))
      .catch(console.error);

    API.get("/events-by-priority")
      .then((res) => setPriorityData(res.data))
      .catch(console.error);
  }, []);

  const pieData = {
    labels: Object.keys(typeData),
    datasets: [
      {
        data: Object.values(typeData),
        backgroundColor: ["#3b82f6", "#ef4444"],
      },
    ],
  };

  const barData = {
    labels: Object.keys(zoneData),
    datasets: [
      {
        label: "Events",
        data: Object.values(zoneData),
        backgroundColor: "#10b981",
      },
    ],
  };

  const doughnutData = {
    labels: Object.keys(priorityData),
    datasets: [
      {
        data: Object.values(priorityData),
        backgroundColor: ["#f59e0b", "#8b5cf6", "#ef4444"],
      },
    ],
  };

  return (
    <div className="page-container" >
      <h1>Analytics Dashboard</h1>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto 40px",
          background: "#111827",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>Events by Type</h2>
        <Pie data={pieData} />
      </div>

      <div
        style={{
          marginBottom: "40px",
          background: "#111827",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>Events by Zone</h2>
        <Bar data={barData} />
      </div>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "#111827",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>Events by Priority</h2>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
}

export default Analytics;
