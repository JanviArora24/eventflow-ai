function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        padding: "25px",
        borderRadius: "15px",
        minWidth: "220px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;