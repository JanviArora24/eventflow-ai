import { Link } from "react-router-dom";

function Navbar() {
  return (
   <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    padding: "24px",
    background: "#0b1120",
    borderBottom: "1px solid #1e293b",
    marginBottom: "40px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
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