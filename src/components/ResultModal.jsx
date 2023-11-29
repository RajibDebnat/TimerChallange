import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
// import TimerChallange from "./TimerChallange";
// if i want to forward ref from one component to other componet then i have to use this forwardRef method
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  console.log(remainingTime);
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  console.log(formatedRemainingTime);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    // here ref is connected with TimerChallange Component
    return {
      open() {
        // like this type of showModal components i can use this approach at first here i diteched my ref with timerchallange componet and use useImperativeHandle to just open this modal
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2> You {result}</h2>}
      {!userLost && <h2> Your Score: {score}</h2>}
      <p>
        the target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        you stopped the timer with{" "}
        <strong>
          {formatedRemainingTime} second{targetTime > 1 ? "s" : ""} left
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
