import { forwardRef, useImperativeHandle, useRef } from "react";
// import TimerChallange from "./TimerChallange";
// if i want to forward ref from one component to other componet then i have to use this forwardRef method
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    // here ref is connected with TimerChallange Component
    return {
      open() {
        // like this type of showModal components i can use this approach at first here i diteched my ref with timerchallange componet and use useImperativeHandle to just open this modal 
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2> You {result}</h2>
      <p>
        the target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        you stopped the timer with{" "}
        <strong>X second{targetTime > 1 ? "s" : ""} left</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
