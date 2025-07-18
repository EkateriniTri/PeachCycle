import React from "react";
import CycleSelector from "./CycleSelector";
import "./CalendarView.css";
import "./App.css";
import CalendarView from "./CalendarView";

function App() {
  return (
    <div className="App">
      <h1> PeachCycle</h1>
      <div className="calendar-container">
        <CalendarView />
      </div>

      <CycleSelector />
    </div>
  );
}

export default App;
