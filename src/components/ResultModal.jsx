import { forwardRef } from "react";
// if i want to forward ref from one component to other componet then i have to use this forwardRef method 
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2> You {result}</h2>
      <p>
        the target time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        you stopped the timer with <strong>X second left </strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
