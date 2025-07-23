import React, { useEffect } from "react";
import "./PhaseRange.css";

export default function PhaseRange({ range }) {
  useEffect(() => {}, [range]);

  if (!Array.isArray(range)) {
    return (
      <p>
        <strong>Range:</strong> (Invalid format)
      </p>
    );
  }

  return (
    <div className="Phase-box">
      <p>
        <strong>Range:</strong> Day {range[0]}–{range[1]}
      </p>
    </div>
  );
}
