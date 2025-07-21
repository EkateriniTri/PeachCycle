import React from "react";
import CycleSelector from "./CycleSelector";
import "./CalendarView.css";
import "./App.css";
import CalendarView from "./CalendarView";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> PeachCycle</h1>
        <div className="calendar-container">
          <CalendarView />
        </div>

        <CycleSelector />
        <footer className="text-center">
          This project was coded by Katerina Tri, it is open-sourced on{" "}
          <a
            href="https://github.com/EkateriniTri/PeachCycle.git"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://peach-cycle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
