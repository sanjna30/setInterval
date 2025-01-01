import React, { useState, useEffect } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) clearInterval(interval);
        return prevProgress + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Download Progress</h1>
      <div style={{ width: "100%", backgroundColor: "#ddd" }}>
        <div style={{ width: `${progress}%`, backgroundColor: "green", height: "20px" }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default App;
