import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState(0);
  const evtSource = new EventSource("http://localhost:3000/events");

  useEffect(() => {
    evtSource.onmessage = (event) => {
      setEventData(event.data);
    };
  }, [evtSource]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Event data = <code>{eventData}</code>
        </p>
      </div>
    </div>
  );
}

export default App;
