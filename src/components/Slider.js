import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { FiPause } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./slider.css";

function Slide({ cname, id, title, description, live_url, code_url }) {
    return (
        <div className={cname} id={id}>
            <h4>{title}</h4>
            <small className="desc">{description}</small>
            <div className="links-wrapper">
                <a href={code_url} target="_blank" rel="noreferrer">
                    Code
                    <HiOutlineCode className="a-in"></HiOutlineCode>
                </a>
                <a href={live_url} target="_blank" rel="noreferrer">
                    Visit
                    <BiLinkAlt className="a-in" />
                </a>
            </div>
        </div>
    );
}

export default function Slider(props) {
    const projects = props.data;
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const last = projects.length - 1;
        if (slide < 0) {
            setSlide(last);
        } else if (slide > last) {
            setSlide(0);
        }
    }, [slide, projects]);

    return (
        <div className="component">
            <div className="slider">
                {projects.map((project, index) => {
                    let position = "show";
                    if (slide === index) {
                        position = "show active";
                    } else if (
                        index === slide - 1 ||
                        (slide === 0 && index === projects.length - 1)
                    ) {
                        position = "show next";
                    } else {
                        position = "show prev";
                    }
                    return (
                        <Slide key={project.id} cname={position} {...project} />
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={() => setSlide(slide - 1)}>
                    <AiFillCaretLeft />
                </button>
                <button>
                    <FiPause />
                </button>
                <button onClick={() => setSlide(slide + 1)}>
                    <AiFillCaretRight />
                </button>
            </div>
        </div>
    );
}
