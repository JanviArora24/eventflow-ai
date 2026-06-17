import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
        background: "#0f172a",
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/heatmap">Heatmap</Link>
      <Link to="/prediction">Prediction</Link>
    </div>
  );
}

export default Navbar;