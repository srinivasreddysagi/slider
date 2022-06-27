import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";

function Slider({ key, title, description, live_url, code_url }) {
    return (
        <div className="show" id={key}>
            <h4>{title}</h4>
            <small className="desc">{description}</small>
            <div className="links-wrapper">
                <a href={live_url} target="_blank" rel="noreferrer">
                    Code
                    <HiOutlineCode className="a-in"></HiOutlineCode>
                </a>
                <a href={code_url} target="_blank" rel="noreferrer">
                    Visit
                    <BiLinkAlt className="a-in" />
                </a>
            </div>
        </div>
    );
}

export default Slider;
