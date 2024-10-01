import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerexpired] = useState(false);
  function handleStart(targetTime) {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerexpired(true);
    }, targetTime * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>Timer is running</p>
    </section>
  );
}
