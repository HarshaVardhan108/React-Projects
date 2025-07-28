import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(20);

  const handleLessTemp = () => {
    setTemp(temp - 1);
  };

  const handleMoreTemp = () => {
    setTemp(temp + 1);
  };

  const getTemperatureInfo = (temp) => {
    if (temp <= 0) return { icon: "❄️", desc: "Freezing", color: "cold" };
    if (temp <= 10) return { icon: "🧊", desc: "Cold", color: "cool" };
    if (temp <= 20) return { icon: "🌤️", desc: "Cool", color: "mild" };
    if (temp <= 30) return { icon: "☀️", desc: "Warm", color: "warm" };
    return { icon: "🔥", desc: "Hot", color: "hot" };
  };

  const tempInfo = getTemperatureInfo(temp);

  return (
    <div className="app-container">
      <div className="background-overlay"></div>
      <div className="main-content">
        <h1 className="app-title">🌡️ Temperature Control</h1>
        <p className="app-subtitle">Adjust the temperature to your comfort</p>

        <div className={`temperature-card ${tempInfo.color}`}>
          <div className="temp-display">
            <span className="temp-icon">{tempInfo.icon}</span>
            <span className="temp-value">{temp}°C</span>
            <span className="temp-desc">{tempInfo.desc}</span>
          </div>

          <div className="temp-controls">
            <button
              className="control-btn minus"
              onClick={handleLessTemp}
              aria-label="Decrease temperature"
            >
              <span>−</span>
            </button>

            <div className="temp-range">
              <span className="min-temp">-10°</span>
              <div className="slider-container">
                <div
                  className="slider-fill"
                  style={{ width: `${((temp + 10) / 50) * 100}%` }}
                ></div>
              </div>
              <span className="max-temp">40°</span>
            </div>

            <button
              className="control-btn plus"
              onClick={handleMoreTemp}
              aria-label="Increase temperature"
            >
              <span>+</span>
            </button>
          </div>

          <div className="quick-actions">
            <button className="quick-btn" onClick={() => setTemp(0)}>
              0°
            </button>
            <button className="quick-btn" onClick={() => setTemp(20)}>
              20°
            </button>
            <button className="quick-btn" onClick={() => setTemp(25)}>
              25°
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
