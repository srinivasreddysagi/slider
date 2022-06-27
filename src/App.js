import Slider from "./components/Slider";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { FiPause } from "react-icons/fi";
import { useEffect, useState } from "react";
import Data from "./components/data.json";

function App() {
    const projects = Data;
    const [slide, setSlide] = useState(0);

    function changeSlide(action) {
        if (action === "prev") {
            if (slide !== 0) {
                setSlide(slide - 1);
            } else {
                setSlide(projects.length - 1);
            }
        } else {
            if (slide === projects.length - 1) {
                setSlide(0);
            } else {
                setSlide(slide + 1);
            }
        }
    }

    return (
        <div className="App">
            <div className="slider">
                <Slider key={projects[slide].key} {...projects[slide]} />
            </div>
            <div className="buttons">
                <button onClick={() => changeSlide("prev")}>
                    <AiFillCaretLeft />
                </button>
                <button>
                    <FiPause />
                </button>
                <button onClick={() => changeSlide("next")}>
                    <AiFillCaretRight />
                </button>
            </div>
        </div>
    );
}

export default App;
