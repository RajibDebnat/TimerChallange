import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [isTimerActive, setTimerStarted] = useState(false);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }
  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      // //   setTimerStarted(false);
      // setTimerStarted(false);
      setTimeRemaining((prevTime) => prevTime - 10);
      console.log(timeRemaining);
    }, 10);
    // setTimerStarted(true);
  };
  console.log(timeRemaining);
  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();

    // setTimerStarted(false);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result="lost"
        remainingTime={timeRemaining}
        onReset = {resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running...." : " Timer is inactive"}
        </p>
      </section>{" "}
    </>
  );
}
