import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [inputName, setInputName] = useState();
  // const [submited, setSubmited] = useState(false);

  function isSubmit() {
    // console.log(playerName.current.value)
    setInputName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {inputName ?? "unkown Enity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={isSubmit}>Set Name</button>
      </p>
    </section>
  );
}
