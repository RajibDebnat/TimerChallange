import { useState, useRef } from "react";
let timer;
export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [isTimerStarted, setTimerStarted] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      //   setTimerStarted(false);
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      {timerExpired && <p>You Lost</p>}
      <p>
        <button onClick={isTimerStarted ? handleStop : handleStart}>
          {isTimerStarted ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={isTimerStarted ? "active" : undefined}>
        {isTimerStarted ? "Timer is running...." : " Timer is not running"}
      </p>
    </section>
  );
}
