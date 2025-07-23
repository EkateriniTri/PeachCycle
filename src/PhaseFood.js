export default function PhaseFood({ food }) {
  return (
    <div className="Phase-box">
      <p>
        <strong>Food:</strong> {food.join(", ")}
      </p>
    </div>
  );
}
