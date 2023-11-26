import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title={"Easy"} targetTime={1} />
        <TimerChallange title={"not easy"} targetTime={5} />
        <TimerChallange title={"Getting tough"} targetTime={10} />
        <TimerChallange title={"tough"} targetTime={20} />
      </div>
    </>
  );
}

export default App;
