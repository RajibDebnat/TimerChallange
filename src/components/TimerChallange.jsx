import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [isTimerActive, setTimerStarted] = useState(false);
  const isTimerActive = timeRemaining > 0 && timeRemaining <= targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }
  const handleStart = () => {
    
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      // //   setTimerStarted(false);
      // setTimerStarted(false);
      setTimeRemaining((prevTime) => prevTime - 10);
      console.log(timeRemaining)
    }, 10);
    // setTimerStarted(true);
  };
  
  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
    // setTimerStarted(false);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer is running...." : " Timer is not running"}
        </p>
      </section>{" "}
    </>
  );
}
