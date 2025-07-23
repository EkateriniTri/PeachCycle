export default function PhaseLifestyle({ movement, clothing }) {
  return (
    <div className="Phase-box">
      <p>
        <strong>Movement:</strong> {movement}
      </p>
      <p>
        <strong>Clothing:</strong> {clothing}
      </p>
    </div>
  );
}
