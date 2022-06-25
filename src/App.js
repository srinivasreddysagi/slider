import Slider from './components/Slider';
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { FiPause } from "react-icons/fi";


function App() {
  return (
      <div className="App">
          <div className="slider">
              <Slider />
          </div>
          <div className="buttons">
              <AiFillCaretLeft />
              <FiPause />
              <AiFillCaretRight />
          </div>
      </div>
  );
}

export default App;
