import React, { useState } from "react";
import { phaseData } from "./phaseData";
import PhaseRange from "./PhaseRange";

export default function CycleSelector() {
  const [selectedPhase, setSelectedPhase] = useState("");

  const handleChange = (e) => {
    setSelectedPhase(e.target.value);
  };

  const phase = phaseData[selectedPhase];

  return (
    <div className="phase">
      <label htmlFor="phase-select"> Select your cycle phase:</label>
      <select id="phase-select" value={selectedPhase} onChange={handleChange}>
        <option value="">--Choose a phase--</option>
        {Object.keys(phaseData).map((key) => (
          <option key={key} value={key}>
            {phaseData[key].name}
          </option>
        ))}
      </select>

      {phase && (
        <div className="phase-info">
          <h2>{phase.name}</h2>
          <PhaseRange range={phase.range} />
          <p>
            <strong>Description:</strong> {phase.description}
          </p>
          <p>
            <strong>Food:</strong> {phase.suggestions.food}
          </p>
          <p>
            <strong>Movement:</strong> {phase.suggestions.movement}
          </p>
          <p>
            <strong>Clothing:</strong> {phase.suggestions.clothing}
          </p>
        </div>
      )}
    </div>
  );
}
