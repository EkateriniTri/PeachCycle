export default function PhaseAvoidFood({ avoid }) {
  if (!avoid || avoid.length === 0) return null;

  return (
    <div className="Phase-box">
      <h3>🚫 Foods to Avoid</h3>
      <ul>
        {avoid.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}
