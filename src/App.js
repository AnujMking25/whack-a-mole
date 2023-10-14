import { useSelector } from "react-redux";
import Highestscore from "./component/Highestscore";
import Screenpage from "./component/display/Screenpage";
import Playgame from "./component/playButton/Playgame";
import Playarea from "./component/play_area/Playarea";

function App() {
const playGame=useSelector(state=>state.currScore.playgame)
  return (
    <>
   { !playGame && <Playgame/>}
     {playGame && <Highestscore/>}
     {playGame && <Screenpage/>}
     {playGame &&<Playarea/>}
    </>
  );
}

export default App;
