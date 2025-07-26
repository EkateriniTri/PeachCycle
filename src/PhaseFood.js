export default function PhaseFood({ food }) {
  return (
    <div className="Phase-box">
      <h3>Recommended Foods</h3>
      <ul>
        {food?.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> ({item.category})
            <br />
            <em>{item.reason}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
