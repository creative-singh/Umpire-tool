import React, { useState } from "react";
import "./CurrentTime.css";

const CurrentTime = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="position">
      <header className="pos">
        <p>{ctime}</p>
      </header>
    </div>
  );
};

export default CurrentTime;
